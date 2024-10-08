import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import AddRoomForm from '../components/AddRoomForm';
import DeleteRoomForm from '../components/DeleteRoomForm';
import Dashboard from '../components/Dashboard';
import axios from 'axios';

const Admin = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [rooms, setRooms] = useState([]);
  const [roomAllotmentRequests, setRoomAllotmentRequests] = useState([]);

  const handleSidebarClick = (page) => {
    setActivePage(page);
  };

  const fetchRooms = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/rooms');
      setRooms(response.data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

  // Function to handle room allotment requests
  const fetchAllotmentRequests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/allotment');
      setRoomAllotmentRequests(response.data);
    } catch (error) {
      console.error('Error fetching room allotment requests:', error);
    }
  };

  // Handle adding new rooms
  const handleAddRoom = async (room) => {
    try {
      const response = await axios.post('http://localhost:5000/api/rooms', room);
      console.log('Added room response:', response.data);
      const newRoom = {
        room_id: response.data.roomId,
        room_number: room.room_number,
        room_type_id: room.room_type_id,
        status: 'available',
        price_per_night: 100, // Example price
        description: 'A new room added', // Example description
      };
      setRooms((prevRooms) => [...prevRooms, newRoom]);
    } catch (error) {
      console.error('Error adding room:', error);
    }
  };

  // Handle deleting rooms
  const handleDeleteRoom = async (roomId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/rooms/${roomId}`);
      console.log(response.data);
      setRooms((prevRooms) => prevRooms.filter(room => room.room_id !== roomId));
    } catch (error) {
      console.error('Error deleting room:', error);
    }
  };

  // Fetch rooms and allotment requests when component mounts
  useEffect(() => {
    fetchRooms();
    if (activePage === 'newRoomAllotment') {
      fetchAllotmentRequests();  // Fetch allotment requests when 'newRoomAllotment' is active
    }
  }, [activePage]);  // Run the effect when the activePage changes

  return (
    <div className="flex">
      <Sidebar onSidebarClick={handleSidebarClick} />
      <div className="w-4/5 p-5">
        {/* Room Allotment Requests */}
        {activePage === 'newRoomAllotment' && (
          <div>
            <h2 className="text-2xl font-bold mb-5">New Room Allotment Requests</h2>
            {roomAllotmentRequests.length > 0 ? (
              <ul>
                {roomAllotmentRequests.map((request, index) => (
                  <li key={index} className="p-4 border rounded mb-3 shadow">
                    <strong>First Name:</strong> {request.first_name} <br />
                    <strong>Last Name:</strong> {request.last_name} <br />
                    <strong>Email:</strong> {request.email} <br />
                    <strong>Phone Number:</strong> {request.phone_number} <br />
                    <strong>Room Type:</strong> {request.room_type} <br />
                    <strong>Check-in Date:</strong> {request.check_in_date} <br />
                    <strong>Check-out Date:</strong> {request.check_out_date}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No room allotment requests.</p>
            )}
          </div>
        )}

        {/* Add Room Form */}
        {activePage === 'addRoom' && <AddRoomForm onAddRoom={handleAddRoom} />}

        {/* Delete Room Form */}
        {activePage === 'deleteRoom' && <DeleteRoomForm onDeleteRoom={handleDeleteRoom} />}

        {/* Show Rooms */}
        {activePage === 'showRooms' && (
          <div>
            <h2 className="text-2xl font-bold mb-5">List of Rooms</h2>
            {rooms.length > 0 ? (
              <ul>
                {rooms.map((room, index) => (
                  <li key={index} className="p-4 border rounded mb-3 shadow">
                    <strong>Room Number:</strong> {room.room_number} <br />
                    <strong>Room Type ID:</strong> {room.room_type_id} <br />
                    <strong>Status:</strong> {room.status} <br />
                    <strong>Price:</strong> ${room.price_per_night} <br />
                    <strong>Description:</strong> {room.description}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No rooms available.</p>
            )}
          </div>
        )}

        {/* Dashboard */}
        {activePage === 'dashboard' && <Dashboard />}
      </div>
    </div>
  );
};

export default Admin;
