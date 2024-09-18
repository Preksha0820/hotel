// models/Employee.js

module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define(
      'Employee',
      {
        employee_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        first_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        last_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        phone_number: DataTypes.STRING,
        position: DataTypes.STRING,
        hire_date: DataTypes.DATE,
        salary: DataTypes.FLOAT,
      },
      {
        tableName: 'Employees',
        timestamps: false,
      }
    );
  
    Employee.associate = function (models) {
      // You can add associations like manager-subordinate relationships here
    };
  
    return Employee;
  };
  