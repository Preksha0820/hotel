import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const roomPrices = {
  "Executive Room": 1200,
  "Suite Room": 1500,
  "Standard Room": 800,
  "Deluxe Room": 1000,
  "Family Room": 1000,
};

const Payment = () => {
  const location = useLocation();
  const formData = location.state; // Get booking data from state

  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  // Calculate the number of days
  const checkInDate = new Date(formData.check_in_date);
  const checkOutDate = new Date(formData.check_out_date);
  const numberOfDays = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24); // Convert milliseconds to days

  // Calculate the total price
  const roomPrice = roomPrices[formData.room_type] || 0; // Default to 0 if room type is not found
  const gst = (roomPrice * numberOfDays * 0.18); // Assuming 18% GST
  const totalAmount = roomPrice * numberOfDays + gst;

  const handlePayment = () => {
    setShowPaymentOptions(true); // Show payment options when Pay Now is clicked
  };

  return (
    <div className="flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Payment Details</h1>
      
      <div className="w-full max-w-lg bg-gray-100 p-8 rounded-lg shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>
        <p><strong>Room Type:</strong> {formData.room_type}</p>
        <p><strong>Price per Night:</strong> ₹{roomPrice}</p>
        <p><strong>Number of Days:</strong> {numberOfDays}</p>
        <p><strong>GST (18%):</strong> ₹{gst.toFixed(2)}</p>
        <p className="text-xl font-bold"><strong>Total Amount:</strong> ₹{totalAmount.toFixed(2)}</p>

        <button 
          onClick={handlePayment} 
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
        >
          Pay Now
        </button>
      </div>

      {/* Payment options section, initially hidden */}
      {showPaymentOptions && (
        <div className="mt-6 w-full max-w-lg bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Choose Payment Method</h2>
          <div className="flex flex-col space-y-2">
            <button className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">
              Phone Pay
            </button>
            <button className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">
              Paytm
            </button>
            <button className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">
              Internet Banking
            </button>
            <button className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">
              Credit/Debit Card
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
