import React from "react";
import { Home, Truck, Clock } from "lucide-react";

const DeliveryDetails = () => {
  // Static delivery details for demonstration
  const deliveryAddress = {
    name: "John Doe",
    street: "123 Main Street, Apt 4B",
    city: "San Francisco",
    state: "CA",
    zipCode: "94103",
    country: "United States",
  };

  const estimatedDelivery = {
    date: "2-4 June, 2025",
    timeSlot: "9:00 AM - 5:00 PM",
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Delivery Details
      </h2>

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
            <p className="pl-6 text-gray-600">
              Standard Shipping (3-5 business days)
            </p>
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

      {/* Timeline items */}
      <div className="mt-8">
        <h3 className="font-medium text-gray-700 mb-4">Order Status</h3>

        <div className="flex flex-col md:flex-row md:items-center relative md:overflow-x-auto">
          {/* Horizontal line on md+ screens */}
          <div className="hidden md:block absolute top-3 left-20 right-20 h-0.5 bg-gray-200 z-0"></div>

          {/* Vertical line on mobile */}
          <div className="block md:hidden absolute top-6 bottom-10 left-4 w-0.5 bg-gray-200 z-0 mx-auto"></div>

          {[
            { title: "Order Placed", date: "May 30, 2025", active: true },
            { title: "Packed", date: "May 31, 2025", active: true },
            { title: "Out for Delivery", date: "June 2, 2025", active: false },
            {
              title: "Delivered",
              date: "Expected by June 4, 2025",
              active: false,
            },
          ].map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex md:flex-col items-center md:items-center md:text-center mb-6 md:mb-0 w-full md:w-1/4"
            >
              {/* Dot */}
              <div
                className={`h-6 w-6 rounded-full flex items-center justify-center ${
                  step.active ? "bg-teal-500" : "bg-gray-300"
                } md:mx-auto ml-1`}
              >
                {step.active && (
                  <svg
                    className="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>

              {/* Text */}
              <div className="ml-4 md:ml-0 mt-2">
                <h4
                  className={`text-sm font-medium ${
                    step.active ? "text-gray-700" : "text-gray-500"
                  }`}
                >
                  {step.title}
                </h4>
                <p className="text-sm text-gray-500">{step.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
