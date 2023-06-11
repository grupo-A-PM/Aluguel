'use strict';

const helloWorldRoute = require('./routes/helloWorldRoute');
const ciclistasRoute = require('./routes/ciclistasRoute');
//const funcionariosRoute = require('./routes/funcionariosRoute');

const handler = (request, response) => {

  ciclistasRoute.getCiclistas();
  ciclistasRoute.getCiclistaById();
  ciclistasRoute.criarCiclista();
  ciclistasRoute.atualizarCiclista();
  ciclistasRoute.ativarCadastroCiclista();
  ciclistasRoute.verificarAluguelBicicleta();

  //funcionariosRoute.getFuncionarios();

}

module.exports = {
  handler,
};