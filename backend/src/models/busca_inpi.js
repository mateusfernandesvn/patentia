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

    // Adicione o método buscarPorTermo diretamente na classe
    static async buscarPorTermo(termo) {
      const resultado = await busca_inpi.findAll({
        where: { pesquisa_realizada: termo },
        include: [
          {
            model: sequelize.models.wipo_dados,
            as: 'descricaoWipo',
            attributes: ['codigo', 'descricao']
          }
        ]
      });
    
      // Se não houver resultados, retorna false
      if (resultado.length === 0) {
        return false;
      }
    
      return resultado;
    }
  }
  
  // Inicialização do modelo
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
    tableName: 'busca_inpi' 
  });

  return busca_inpi;
};
