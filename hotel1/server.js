const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',  // Replace with your actual DB password
  database: 'HOTEL5'      // Replace with your actual DB name
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Admin Login
app.post('/api/admin/login', (req, res) => {
    const { email, password } = req.body;
    const query = `SELECT * FROM admins WHERE email = ? AND password = ?`;
    db.query(query, [email, password], (err, result) => {
      if (err) return res.status(500).send('Error');
      if (result.length > 0) {
        res.send({ success: true });
      } else {
        res.send({ success: false });
      }
    });
  });
  
  // Fetch Rooms
  app.get('/api/rooms', (req, res) => {
    const query = 'SELECT * FROM rooms';
    db.query(query, (err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  });
  
  // Add Room
  app.post('/api/rooms', (req, res) => {
    const { room_number, room_type_id, status, price_per_night, description } = req.body;
    console.log('Room data received:', req.body); // Log incoming data
    const query = 'INSERT INTO rooms (room_number, room_type_id, status, price_per_night, description) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [room_number, room_type_id, status, price_per_night, description], (err, result) => {
        if (err) {
            console.error('Database error:', err); // Log error for troubleshooting
            return res.status(500).send('Error adding room');
        }
        res.send({ success: true, roomId: result.insertId, room_number, room_type_id, status, price_per_night, description });

    });
});
  
  // Delete Room
  
  app.delete('/api/rooms/:id', (req, res) => {
    const { id } = req.params; // room_id from URL
    const query = 'DELETE FROM rooms WHERE room_id = ?'; // Ensure this matches your database schema
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.affectedRows === 0) { 
            return res.status(404).send('Room not found');
        }
        res.send({success: true, message: 'Room deleted successfully' });
    });
});

app.post('/api/allotment', (req, res) => {
  const newAllotmentRequest = req.body;
  // Save to database logic
  allotments.push(newAllotmentRequest); // Assuming you have an allotments array or DB setup
  res.status(201).send('Allotment request saved');
});

app.get('/api/allotment', (req, res) => {
  res.json(allotments); // Send all allotment requests
});

  
  // Update Room
  app.put('/api/rooms/:id', (req, res) => {
    const { id } = req.params;
    const { room_number, room_type_id, status, price_per_night, description } = req.body;
    const query = 'UPDATE rooms SET room_number = ?, room_type_id = ?, status = ?, price_per_night = ?, description = ? WHERE room_id = ?';
    db.query(query, [room_number, room_type_id, status, price_per_night, description, id], (err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  });
  
