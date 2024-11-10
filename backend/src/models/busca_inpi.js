'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class busca_inpi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  busca_inpi.init({
    pedido: DataTypes.STRING,
    deposito: DataTypes.STRING,
    titulo: DataTypes.TEXT,
    ipc: DataTypes.STRING,
    link: DataTypes.TEXT,
    pesquisa_realizada: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'busca_inpi',
  });
  return busca_inpi;
};