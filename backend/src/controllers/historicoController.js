const { wipo_dados, busca_inpi } = require('../models');


// Função para obter Historico
const obterHistorico = async (req, res) => {
    try {
        const historicoList = await busca_inpi.findAll(
            {
                include: [{
                    model: wipo_dados,
                    as: 'descricaoWipo', // Utilizando o alias definido
                    attributes: ['descricao']
                }]
            }
        );
        res.json(historicoList);
    } catch (error) {
        console.error('Erro ao buscar o Histórico:', error); // Log do erro
        res.status(500).json({ error: 'Erro ao buscar o Historico' });
    }
};

module.exports = { obterHistorico };
