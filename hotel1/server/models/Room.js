// models/Room.js

module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define(
      'Room',
      {
        room_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        room_number: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM('available', 'booked', 'maintenance'),
          defaultValue: 'available',
        },
      },
      {
        tableName: 'Rooms',
        timestamps: false,
      }
    );
  
    Room.associate = function (models) {
      Room.belongsTo(models.RoomType, { foreignKey: 'room_type_id' });
      Room.hasMany(models.Booking, { foreignKey: 'room_id' });
    };
  
    return Room;
  };
  