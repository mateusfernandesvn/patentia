const { exec } = require('child_process');

// Função para executar a pesquisa e retornar os dados
const executarPesquisa = (req, res) => {
  const { input } = req.body;

  // Valida se o campo 'input' foi informado
  if (!input) {
    return res.status(400).json({ error: 'O campo "input" é necessário' });
  }

  // Chama o script Python passando o input
  exec(`python ./src/utils/automation.py "${input}"`, async (err, stdout, stderr) => {
    if (err) {
      console.error('Erro ao executar o script:', err);
      return res.status(500).json({ error: 'Erro ao executar o script Python' });
    }

    if (stderr) {
      console.error('Erro no script:', stderr);
      return res.status(500).json({ error: 'Erro no script Python' });
    }

    // Tenta fazer o parse do JSON gerado pelo Python
    let result;
    try {
      result = JSON.parse(stdout);
    } catch (e) {
      return res.status(500).json({ error: 'Erro ao processar a saída do script Python' });
    }

    // Retorna o resultado ao cliente
    return res.json(result); // Retorna o resultado da pesquisa para o cliente
  });
};

module.exports = { executarPesquisa };
