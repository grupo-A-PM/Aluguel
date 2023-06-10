'use strict';

const helloWorldRoute = require('./routes/helloWorldRoute');
const ciclistasRoute = require('./routes/ciclistasRoute');

const handler = (request, response) => {

  ciclistasRoute.getCiclistas();
  ciclistasRoute.getCiclistaById();
  ciclistasRoute.criarCiclista();
  ciclistasRoute.atualizarCiclista();
  ciclistasRoute.ativarCadastroCiclista();
  ciclistasRoute.verificarAluguelBicicleta();

}

module.exports = {
  handler,
};