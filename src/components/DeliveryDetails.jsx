import React from 'react';
import { Home, Truck, Clock } from 'lucide-react';

const DeliveryDetails = () => {
  // Static delivery details for demonstration
  const deliveryAddress = {
    name: 'John Doe',
    street: '123 Main Street, Apt 4B',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94103',
    country: 'United States'
  };
  
  const estimatedDelivery = {
    date: '2-4 June, 2025',
    timeSlot: '9:00 AM - 5:00 PM'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Delivery Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center text-gray-700 mb-2">
            <Home size={18} className="mr-2 text-teal-500" />
            <h3 className="font-medium">Shipping Address</h3>
          </div>
          
          <div className="pl-6 space-y-1 text-gray-600">
            <p className="font-medium">{deliveryAddress.name}</p>
            <p>{deliveryAddress.street}</p>
            <p>{`${deliveryAddress.city}, ${deliveryAddress.state} ${deliveryAddress.zipCode}`}</p>
            <p>{deliveryAddress.country}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex items-center text-gray-700 mb-2">
              <Truck size={18} className="mr-2 text-teal-500" />
              <h3 className="font-medium">Shipping Method</h3>
            </div>
            <p className="pl-6 text-gray-600">Standard Shipping (3-5 business days)</p>
          </div>
          
          <div>
            <div className="flex items-center text-gray-700 mb-2">
              <Clock size={18} className="mr-2 text-teal-500" />
              <h3 className="font-medium">Estimated Delivery</h3>
            </div>
            <div className="pl-6 text-gray-600">
              <p>{estimatedDelivery.date}</p>
              <p>{estimatedDelivery.timeSlot}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Order Tracking Timeline */}
      <div className="mt-8">
        <h3 className="font-medium text-gray-700 mb-4">Order Status</h3>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200 h-full"></div>
          
          {/* Timeline items */}
          <div className="space-y-8 relative">
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-teal-500 z-10 flex items-center justify-center">
                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-700">Order Placed</h4>
                <p className="text-sm text-gray-500">May 30, 2025</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-teal-500 z-10 flex items-center justify-center">
                <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-700">Packed</h4>
                <p className="text-sm text-gray-500">May 31, 2025</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-gray-300 z-10 flex items-center justify-center">
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-500">Out for Delivery</h4>
                <p className="text-sm text-gray-500">June 2, 2025</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-gray-300 z-10 flex items-center justify-center">
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-500">Delivered</h4>
                <p className="text-sm text-gray-500">Expected by June 4, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;