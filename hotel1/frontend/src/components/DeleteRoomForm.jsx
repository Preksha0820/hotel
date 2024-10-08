import React, { useState } from 'react';

const DeleteRoomForm = ({ onDeleteRoom }) => {
  const [roomId, setRoomId] = useState(''); // Use roomId instead of roomNumber

  const handleSubmit = (e) => {
    e.preventDefault();
    onDeleteRoom(roomId); // Pass roomId to delete
    setRoomId(''); // Clear the input field

    alert('Room deleted');
  };

  return (
    <div className="bg-white p-10 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Delete a Room</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roomId">
            Room ID
          </label>
          <input 
            type="text" 
            id="roomId" // Updated to roomId
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter room ID to delete"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button 
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delete Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteRoomForm;
