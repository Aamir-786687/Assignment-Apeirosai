import React from 'react';
import { CreditCard, ShieldCheck } from 'lucide-react';

const OrderSummary = ({ subtotal, deliveryFee, discount, total, handlePlaceOrder }) => {
  const discountAmount = subtotal * (discount / 100);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-800 font-medium">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="text-gray-800 font-medium">${deliveryFee.toFixed(1)}</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount ({discount}%)</span>
            <span>-${discountAmount.toFixed(2)}</span>
          </div>
        )}
        
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-800 font-semibold">Total</span>
            <span className="text-xl text-gray-900 font-bold">${total.toFixed(2)}</span>
          </div>
          <div className="text-xs text-gray-500 mt-1 text-right">
            Including taxes
          </div>
        </div>
      </div>
      
      <button
        onClick={handlePlaceOrder}
        className="w-full py-3 bg-teal-600 text-white rounded-md font-semibold hover:bg-teal-700 active:bg-teal-800 transition-colors duration-200 shadow-sm flex items-center justify-center"
      >
        <CreditCard size={18} className="mr-2" />
        Place Order
      </button>
      
      <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
        <ShieldCheck size={16} className="mr-1 text-teal-500" />
        <span>Secure checkout with SSL encryption</span>
      </div>
      
     
    </div>
  );
};

export default OrderSummary;