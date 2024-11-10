// modelo busca_inpi.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class busca_inpi extends Model {
    static associate(models) {
      busca_inpi.belongsTo(models.wipo_dados, {
        foreignKey: 'ipc',
        targetKey: 'codigo',
        as: 'descricaoWipo'
      });
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
    tableName: 'busca_inpi' // Define o nome exato da tabela no banco
  });

  return busca_inpi;
};
