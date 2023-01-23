'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class applied_jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      applied_jobs.hasMany(models.users,{foreignKey: "id"})
      applied_jobs.hasMany(models.jobs,{foreignKey: "id"})
      // define association here
    }
  }
  applied_jobs.init({
    user_id: DataTypes.INTEGER,
    job_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'applied_jobs',
  });
  return applied_jobs;
};