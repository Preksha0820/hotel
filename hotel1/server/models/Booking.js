// models/Booking.js

module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define(
      'Booking',
      {
        booking_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        check_in_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        check_out_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        total_price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        tableName: 'Bookings',
        timestamps: false,
      }
    );
  
    Booking.associate = function (models) {
      Booking.belongsTo(models.Guest, { foreignKey: 'guest_id' });
      Booking.belongsTo(models.Room, { foreignKey: 'room_id' });
    };
  
    return Booking;
  };
  