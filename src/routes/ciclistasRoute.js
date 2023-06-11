'use strict'

const ciclistasController = require('../controller/ciclistasController');

// const { handler } = require('../index');

const routes = async (fastify) => {

    fastify.get('/ciclistas', ciclistasController.getCiclistas);
    fastify.post('/ciclistas', ciclistasController.criarCiclista);
    fastify.get('/ciclistas/:id', ciclistasController.getCiclistaById);
    fastify.put('/ciclistas/:id', ciclistasController.atualizarCiclista);
    fastify.post('/ciclistas/:id/ativar', ciclistasController.ativarCadastroCiclista);
    fastify.get('/ciclistas/:id/verificar-aluguel', ciclistasController.verificarAluguelBicicleta);
    
}

module.exports = routes;