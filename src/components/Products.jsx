import React from 'react';
import { Plus, Check } from 'lucide-react';

const Products = ({ products, addToCart, isInCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="border border-gray-200 rounded-lg p-4 flex flex-col animate-fadeIn"
          >
            <div className="h-48 mb-4 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            
            <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 flex-grow">
              {product.title}
            </h3>
            
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-semibold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              
              <button
                onClick={() => addToCart(product)}
                disabled={isInCart(product.id)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isInCart(product.id)
                    ? 'bg-green-100 text-green-700'
                    : 'bg-teal-600 text-white hover:bg-teal-700'
                }`}
              >
                {isInCart(product.id) ? (
                  <>
                    <Check size={16} className="mr-1" />
                    Added
                  </>
                ) : (
                  <>
                    <Plus size={16} className="mr-1" />
                    Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;