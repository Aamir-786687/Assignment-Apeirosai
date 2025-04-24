import React, { useState } from 'react';
import { Tag, CheckCircle, AlertCircle } from 'lucide-react';

const PromoCode = ({ promoCode, setPromoCode, handleApplyPromo, discount, isLoading }) => {
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!promoCode.trim()) {
      setError('Please enter a promo code');
      return;
    }
    
    setError('');
    handleApplyPromo(promoCode);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Tag size={18} className="mr-2 text-teal-500" />
        <h2 className="text-xl font-semibold text-gray-800">Promo Code</h2>
      </div>
      
      {discount > 0 ? (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md flex items-center">
          <CheckCircle size={18} className="text-green-500 mr-2" />
          <div>
            <p className="text-green-800 font-medium">"{promoCode}" applied!</p>
            <p className="text-green-600 text-sm">You saved {discount}% on your order</p>
          </div>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="mt-2">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-grow">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => {
                setPromoCode(e.target.value.toUpperCase());
                setError('');
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Enter promo code (e.g. SAVE10)"
              className={`w-full px-4 py-2 rounded-md border ${
                error ? 'border-red-300 focus:border-red-500' : 
                isFocused ? 'border-teal-300 focus:border-teal-500' : 'border-gray-300'
              } focus:outline-none transition-colors`}
              disabled={isLoading}
            />
            {error && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <AlertCircle size={14} className="mr-1" />
                <span>{error}</span>
              </div>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isLoading || discount > 0}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
              discount > 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Applying
              </span>
            ) : discount > 0 ? (
              'Applied'
            ) : (
              'Apply'
            )}
          </button>
        </div>
      </form>
      
      <div className="mt-3 text-sm text-gray-500">
        <p>Try code "SAVE10" for 10% off your order</p>
      </div>
    </div>
  );
};

export default PromoCode;