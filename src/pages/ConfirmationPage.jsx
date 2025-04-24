import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, Package, ArrowLeft } from 'lucide-react';

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const [orderSummary, setOrderSummary] = useState(null);
  
  useEffect(() => {
    // Retrieve order data from localStorage
    const savedOrder = localStorage.getItem('orderSummary');
    
    if (savedOrder) {
      setOrderSummary(JSON.parse(savedOrder));
    } else {
      // If no order data, redirect back to checkout
      navigate('/');
    }
  }, [navigate]);
  
  if (!orderSummary) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }
  
  const { orderId, orderDate, items, subtotal, discount, deliveryFee, total } = orderSummary;
  const formattedDate = new Date(orderDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const discountAmount = subtotal * (discount / 100);
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle size={48} className="text-green-600" />
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Order Confirmed!</h1>
          <p className="text-gray-600 mt-2">
            Thank you for your purchase. Your order has been received.
          </p>
        </div>
        
        <div className="border-t border-b border-gray-200 py-4 px-2 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-500 mb-1">Order Number</p>
              <p className="font-semibold text-gray-800">{orderId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Date</p>
              <p className="font-semibold text-gray-800">{formattedDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Total</p>
              <p className="font-semibold text-gray-800">${total.toFixed(2)}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Details</h2>
          
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-start border-b border-gray-200 pb-4 last:border-b-0">
                <div className="w-16 h-16 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="ml-4 flex-grow">
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 mb-1">Qty: {item.quantity}</p>
                </div>
                
                <div className="text-right ml-4">
                  <p className="text-sm font-medium text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800">${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Shipping</span>
              <span className="text-gray-800">${deliveryFee.toFixed(2)}</span>
            </div>
            
            {discount > 0 && (
              <div className="flex justify-between text-sm text-green-600">
                <span>Discount ({discount}%)</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            
            <div className="flex justify-between text-md font-semibold pt-2 border-t border-gray-200">
              <span className="text-gray-800">Total</span>
              <span className="text-gray-900">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h3 className="font-medium text-gray-700 mb-3">Delivery Timeline</h3>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Package size={20} className="text-teal-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Package Processing</p>
              <p className="text-xs text-gray-500">Your order will be processed within 24 hours</p>
            </div>
          </div>
          <div className="w-px h-6 bg-gray-300 ml-[10px]"></div>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Clock size={20} className="text-teal-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Estimated Delivery</p>
              <p className="text-xs text-gray-500">June 2 - June 4, 2025</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-teal-600 hover:text-teal-800 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;