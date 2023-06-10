'use strict'

const { handler } = require('../index');

const routes = async (fastify) => {
    fastify.get('/helloWorld', (request, reply) => {
        //reply.send(handler());
        reply.send('Hello World');     
    })

}

module.exports = routes;