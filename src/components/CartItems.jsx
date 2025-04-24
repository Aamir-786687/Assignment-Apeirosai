import React from "react";
import { Minus, Plus, X } from "lucide-react";

const CartItems = ({ items, updateQuantity, removeItem }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Cart Items</h2>

      {items.length === 0 ? (
        <div className="text-center py-8 text-gray-500">Your cart is empty</div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start border-b border-gray-200 pb-4 animate-fadeIn"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4 sm:mb-0 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-grow sm:ml-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-md font-medium text-gray-800 line-clamp-2">
                    {item.title}
                  </h3>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                    aria-label="Remove item"
                  >
                    <X size={18} className="ml-38" />
                  </button>
                </div>

                <p className="text-sm text-gray-500 mb-2 line-clamp-1">
                  {item.category}
                </p>

                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-l-md transition-colors"
                      disabled={item.quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="px-3 py-1 text-gray-800">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-r-md transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-md font-medium text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartItems;
