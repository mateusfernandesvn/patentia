const express = require('express');
const { obterHistorico } = require('../controllers/historicoController');

const router = express.Router();

// Rota GET para executar a pesquisa
router.get('/', obterHistorico);

module.exports = router;
