const { exec } = require('child_process');
const ExcelJS = require('exceljs');
const { busca_inpi } = require('../models');

// Função para executar a pesquisa
const executarPesquisa = async (req, res) => {
  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: 'O campo "input" é necessário' });
  }

  try {
    // Verifica se o termo já existe no banco de dados
    let pesquisaExistente = await busca_inpi.buscarPorTermo(input);

    // Se a pesquisa já existe, retorna o resultado do banco de dados
    if (pesquisaExistente) {
      return res.json({ resultado: pesquisaExistente });
    }

    // Se não existe, chama o script Python passando o input
    exec(`python ./backend/src/utils/automation.py "${input}"`, async (err, stdout, stderr) => {
      if (err) {
        console.error('Erro ao executar o script:', err);
        return res.status(500).json({ error: 'Erro ao executar o script Python' });
      }

      if (stderr) {
        console.error('Erro no script:', stderr);
        return res.status(500).json({ error: 'Erro no script Python' });
      }

      // Chama buscarPorTermo novamente para pegar o resultado atualizado do banco
      pesquisaExistente = await busca_inpi.buscarPorTermo(input);

      return res.json({ resultado: pesquisaExistente });
    });
  } catch (error) {
    console.error('Erro ao acessar o banco de dados:', error);
    return res.status(500).json({ error: 'Erro ao acessar o banco de dados' });
  }
};

// Função para exportar para Excel
async function exportarParaExcel(req, res) {
  const pesquisa_realizada = req.query.filter || '';

  try {
    const results = await busca_inpi.findAll({
      where: { pesquisa_realizada: { [Op.like]: `%${pesquisa_realizada}%` } },
      include: [
        {
          model: sequelize.models.wipo_dados,
          as: 'descricaoWipo',
          attributes: ['codigo', 'descricao'],
        },
      ],
    });

    // Criação do arquivo Excel em memória
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Resultados');

    // Define as colunas da planilha
    worksheet.columns = [
      { header: 'Pedido', key: 'pedido', width: 15 },
      { header: 'Depósito', key: 'deposito', width: 15 },
      { header: 'Título', key: 'titulo', width: 30 },
      { header: 'Código', key: 'codigo', width: 15 },
      { header: 'Descrição', key: 'descricao', width: 40 },
    ];

    // Adiciona os dados à planilha
    results.forEach((record) => {
      const data = record.toJSON();
      worksheet.addRow({
        pedido: data.pedido,
        deposito: data.deposito,
        titulo: data.titulo,
        codigo: data.descricaoWipo?.codigo,
        descricao: data.descricaoWipo?.descricao,
      });
    });

    // Configura cabeçalho para download do arquivo
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="Pesquisa_SENAIBOT.xlsx"'
    );
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );

    // Envia o arquivo diretamente na resposta
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Erro ao gerar o arquivo Excel:', error);
    res.status(500).send('Erro ao gerar o arquivo Excel');
  }
}

// Exporte as funções
module.exports = { executarPesquisa, exportarParaExcel };
