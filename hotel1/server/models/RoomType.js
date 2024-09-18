// models/RoomType.js

module.exports = (sequelize, DataTypes) => {
    const RoomType = sequelize.define(
      'RoomType',
      {
        room_type_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price_per_night: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        description: DataTypes.TEXT,
      },
      {
        tableName: 'RoomTypes',
        timestamps: false,
      }
    );
  
    RoomType.associate = function (models) {
      RoomType.hasMany(models.Room, { foreignKey: 'room_type_id' });
    };
  
    return RoomType;
  };
  