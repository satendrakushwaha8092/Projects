"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      jobs.belongsToMany(models.users, {
        foreignKey: "id",
        through: "applied_jobs",
      });
      // define association here
    }
  }
  jobs.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      eligiblity: DataTypes.STRING,
      package: DataTypes.INTEGER,
      location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "jobs",
      paranoid: true,
    }
  );
  return jobs;
};
