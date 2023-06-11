'use strict'

const ciclistasController = require('../controller/ciclistasController');

const { handler } = require('../index');

const routesCiclista = async (fastify) => {
    fastify.get('/ciclistas', ciclistasController.getCiclistas);
    fastify.post('/ciclistas', ciclistasController.criarCiclista);
    fastify.get('/ciclistas/:id', ciclistasController.getCiclistaById);
    fastify.put('/ciclistas/:id', ciclistasController.atualizarCiclista);
}

module.exports = routesCiclista;