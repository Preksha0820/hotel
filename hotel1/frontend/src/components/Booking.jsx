import React, { useState } from 'react';

function Booking() {
  const [name, setName] = useState('');
  const [roomType, setRoomType] = useState('Deluxe Room');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    // Handle booking logic
  };

  return (
    <div className="flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-semibold mb-6">Book Your Stay</h1>
      <form onSubmit={handleBooking} className="w-full max-w-md bg-gray-100 p-8 rounded-lg shadow-lg">
        <label className="block text-gray-700 mb-2">Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"/>
        
        <label className="block text-gray-700 mb-2">Room Type:</label>
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg">
          <option>Deluxe Room</option>
          <option>Suite Room</option>
          <option>Executive Room</option>
        </select>
        
        <label className="block text-gray-700 mb-2">Check-in Date:</label>
        <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"/>
        
        <label className="block text-gray-700 mb-2">Check-out Date:</label>
        <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"/>
        
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;
