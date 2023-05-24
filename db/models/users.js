const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      this.belongsTo(models.Doctors, { foreignKey: 'doctor_id' });
      this.hasMany(models.Attacks, { foreignKey: 'user_id' });
    }
  }
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    userInfo: DataTypes.JSON,
    type: DataTypes.STRING,
    doctor_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
