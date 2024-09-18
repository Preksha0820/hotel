const express = require('express');
const app = express();
const cors = require('cors');
const { sequelize } = require('./models');

require('dotenv').config();

app.use(cors());
app.use(express.json());

// Import Routes
const guestRoutes = require('./routes/guestRoutes');

// Use Routes
app.use('/api/guests', guestRoutes);

// Test Database Connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch((err) => {
    console.log('Error: ' + err);
  });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
