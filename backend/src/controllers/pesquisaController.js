const { exec } = require('child_process');
const { busca_inpi } = require('../models');

const executarPesquisa = async (req, res) => {
  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: 'O campo "input" é necessário' });
  }

  try {
    // Verifica se o termo já existe no banco de dados
    const pesquisaExistente = await busca_inpi.buscarPorTermo(input);

    // Se a pesquisa já existe, retorna o resultado do banco de dados
    if (pesquisaExistente) {
      return res.json({ resultado: pesquisaExistente });
    }

    // Se não existe, chama o script Python passando o input
    exec(`python ./backend/src/utils/automation.py "${input}"`, (err, stdout, stderr) => {
      if (err) {
        console.error('Erro ao executar o script:', err);
        return res.status(500).json({ error: 'Erro ao executar o script Python' });
      }

      if (stderr) {
        console.error('Erro no script:', stderr);
        return res.status(500).json({ error: 'Erro no script Python' });
      }

      return res.json({ message: 'Pesquisa realizada e salva com sucesso!' });
    });
  } catch (error) {
    console.error('Erro ao acessar o banco de dados:', error);
    return res.status(500).json({ error: 'Erro ao acessar o banco de dados' });
  }
};

module.exports = { executarPesquisa };