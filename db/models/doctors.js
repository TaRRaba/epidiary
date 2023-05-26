const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Doctors extends Model {
    static associate(models) {
      this.hasMany(models.Users, { foreignKey: 'doctor_id' });
    }
  }
  Doctors.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fullName: DataTypes.STRING,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Doctors',
  });
  return Doctors;
};
