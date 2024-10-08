import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Booking({ onNewRoomAllotmentRequest }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    address: '',
    ID_TYPE: '',
    ID_number: '',
    date_of_birth: '',
    room_type: 'Deluxe Room',
    check_in_date: '',
    check_out_date: ''
  });

  const navigate = useNavigate();

  const handleBooking = (e) => {
    e.preventDefault();
    // Navigate to payment page with formData as state
    navigate('/payment', { state: formData });
    // Handle the room allotment request
    onNewRoomAllotmentRequest(formData);
  };

  return (
    <div className="flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Book Your Stay</h1>
      <form onSubmit={handleBooking} className="w-full max-w-lg bg-gray-100 p-8 rounded-lg shadow-lg space-y-4">
        
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">First Name:</label>
            <input 
              type="text" 
              value={formData.first_name} 
              onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} 
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 mb-2">Last Name:</label>
            <input 
              type="text" 
              value={formData.last_name} 
              onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} 
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <label className="block text-gray-700 mb-2">Email:</label>
        <input 
          type="email" 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          required
          className="w-full p-3 border border-gray-300 rounded-lg"
        />

        <label className="block text-gray-700 mb-2">Phone Number:</label>
        <input 
          type="tel" 
          value={formData.phone_number} 
          onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })} 
          required
          className="w-full p-3 border border-gray-300 rounded-lg"
        />

        <label className="block text-gray-700 mb-2">Room Type:</label>
        <select 
          value={formData.room_type} 
          onChange={(e) => setFormData({ ...formData, room_type: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg"
        >
          <option>Executive Room</option>
          <option>Suite Room</option>
          <option>Standard Room</option>
          <option>Deluxe Room</option>
          <option>Family Room</option>
        </select>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label className="block text-gray-700 mb-2">Check-in Date:</label>
            <input 
              type="date" 
              value={formData.check_in_date} 
              onChange={(e) => setFormData({ ...formData, check_in_date: e.target.value })} 
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 mb-2">Check-out Date:</label>
            <input 
              type="date" 
              value={formData.check_out_date} 
              onChange={(e) => setFormData({ ...formData, check_out_date: e.target.value })} 
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

export default Booking;
