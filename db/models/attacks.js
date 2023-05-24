const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Attacks extends Model {
    static associate(models) {
      this.belongsTo(models.Users, { foreignKey: 'user_id' });
    }
  }
  Attacks.init({
    user_id: DataTypes.INTEGER,
    attackInfo: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'Attacks',
  });
  return Attacks;
};
