const express = require('express');
const { executarPesquisa, exportarParaExcel } = require('../controllers/pesquisaController');

const router = express.Router();

// Rota POST para executar a pesquisa
router.post('/', executarPesquisa);

// Rota GET para Exportar Excel de Download
router.get('/download', exportarParaExcel);

module.exports = router;
