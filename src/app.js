'use strict'

const fastify = require('fastify');
const ciclistasRoute = require('./routes/ciclistasRoute');

const build = (opts = {}) => {
    const app = fastify(opts);

    app.register(require('./routes/helloWorldRoute'));
    app.register(require('./routes/ciclistasRoute'));

    return app;
}

module.exports = {
    build,
}