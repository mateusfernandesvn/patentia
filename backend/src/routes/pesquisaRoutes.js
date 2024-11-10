const express = require('express');
const { executarPesquisa } = require('../controllers/pesquisaController');

const router = express.Router();

// Rota POST para executar a pesquisa
router.post('/pesquisar', executarPesquisa);

module.exports = router;
