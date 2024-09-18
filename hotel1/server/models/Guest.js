    module.exports = (sequelize, DataTypes) => {
    const Guest = sequelize.define('Guest', {
      guest_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      address: DataTypes.STRING,
      ID_TYPE: DataTypes.STRING,
      ID_number: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
    }, {
      tableName: 'Guests',
      timestamps: false,
    });
  
    Guest.associate = function(models) {
      // associations can be defined here
      Guest.hasMany(models.Booking, { foreignKey: 'guest_id' });
    };
  
    return Guest;
  };
  