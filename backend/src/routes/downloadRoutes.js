const express = require('express');
const { exportarParaExcel } = require('../controllers/pesquisaController');

const router = express.Router();

// Rota GET para Exportar Excel de Download
router.get('/', exportarParaExcel);

module.exports = router;
