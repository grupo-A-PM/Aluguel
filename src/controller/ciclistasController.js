const { v4: uuidv4 } = require('uuid');
const { ciclistas } = require('../data.js');

// Acho que esse metodo nao existe <<<<<<< DELETAR
async function getCiclistas(request, reply) {
  try {
    return reply.status(200).send(ciclistas);
  } catch (error) {
    console.error(error);
    reply.status(500).send('Erro ao obter ciclistas');
  }
}

const criarCiclista = async (request, reply) => {
  try {
    const novoCiclista = request.body

    const id = uuidv4();
    novoCiclista.id = id;

    novoCiclista.ativo = false;

    // Chama metodo de verificacao de email
    const resultadoVerificacaoEmail = verificarEmail(novoCiclista.email);
    if (!resultadoVerificacaoEmail.success) {
      return reply.status(resultadoVerificacaoEmail.status).send(resultadoVerificacaoEmail.message);
    }

    if (!novoCiclista.email || !novoCiclista.nacionalidade || !novoCiclista.nome || !novoCiclista.senha) {
      return reply.status(422).send('Dados inválidos. Preencha todos os campos obrigatórios e tente novamente.');
    }

    ciclistas.push(novoCiclista);
    return reply.status(201).send(novoCiclista);
  } catch (error) {
    console.error(error)
    reply.status(500).send('Erro ao criar ciclista')
  }
}

const getCiclistaById = async (request, reply) => {
  try {
    const id = request.params.id
    const ciclista = ciclistas.find(c => c.id === id)

    if (!ciclista) {
      return reply.status(404).send({
        codigo: "404",
        mensagem: "Requisição não encontrada"
      });
    }

    //retornar apenas os dados que desejamos <<< TEM METODO MELHOR DE FAZER ISSO?
    const dadosCiclista = {
      id: ciclista.id,
      status: ciclista.ativo ? 'Ativo' : 'Inativo',
      nome: ciclista.nome,
      nascimento: ciclista.nascimento,
      cpf: ciclista.cpf,
      passaporte: {
        numero: ciclista.passaporte.numero,
        validade: ciclista.passaporte.validade,
        pais: ciclista.passaporte.pais
      },
      nacionalidade: ciclista.nacionalidade,
      email: ciclista.email,
      urlFotoDocumento: ciclista.urlFotoDocumento
    };

    return reply.send(dadosCiclista)
  } catch (error) {
    console.error(error)
    reply.status(422).send({
      codigo: "422",
      mensagem: "Dados inválidos"
    })
  }
}

const atualizarCiclista = async (request, reply) => {
  try {
    const id = request.params.id
    const dadosAtualizados = request.body
    const ciclista = ciclistas.find(c => c.id === id)

    if (!ciclista) {
      return reply.status(404).send('Ciclista não encontrado')
    }

    const ciclistaAtualizado = { ...ciclista, ...dadosAtualizados }

    ciclistas[ciclistas.indexOf(ciclista)] = { ...ciclista, ...dadosAtualizados }

    return reply.status(200).send('Dados atualizados' + JSON.stringify(ciclista))
  } catch (error) {
    console.error(error)
    reply.status(422).send('Dados inválidos');
  }
}

const ativarCadastroCiclista = async (request, reply) => {
  try {
    const id = request.params.id;
    const ciclista = ciclistas.find(c => c.id === id);

    if (!ciclista) {
      return reply.status(404).send('Ciclista não encontrado');
    }

    ciclista.ativo = true;

    return reply.status(200).send('Ciclista ativado' + JSON.stringify(ciclista))
  } catch (error) {
    console.error(error);
    reply.status(422).send('Dados inválidos');
  }
};

//REVER
const permiteAluguel = async (request, reply) => {
  try {

    const id = request.params.id
    const ciclista = ciclistas.find(c => c.id === id && c.ativo);

    if (!ciclista) {
      return reply.status(404).send({
        codigo: '404',
        mensagem: 'Ciclista não encontrado'
      });
    }

    const cadastroAtivo = !!ciclista.ativo;

    return reply.status(200).send(cadastroAtivo);

  } catch (error) {
    console.error(error);
    reply.status(500).send('Erro ao verificar aluguel de bicicleta');
  }
};

const verificarEmail = (email) => {

  if (!email) {
    return reply.status(400).send({
      success: false,
      status: 400,
      message: 'E-mail não fornecido',
    });
  }
  
  const emailEmUso = ciclistas.find((c) => c.email === email);

  if (emailEmUso) {
    return {
      success: false,
      status: 400,
      message: 'E-mail já está em uso por outro ciclista. Escolha um e-mail diferente.',
    };
  }

  return {
    success: true,
    status: 200,
    message: 'E-mail disponível para uso.',
  };
};

const getCartaoCredito = async (request, reply) => {
  try {
    const id = request.params.id;
    const ciclista = ciclistas.find(c => c.id === id);

    if (!ciclista) {
      return reply.status(404).send('Ciclista não encontrado');
    }

    const cartaoCredito = ciclista.meioDePagamento;

    return reply.status(200).send(cartaoCredito);
  } catch (error) {
    console.error(error);
    reply.status(422).send('Dados inválidos');
  }
};

const atualizarCartaoCredito = async (request, reply) => {
  try {
    const id = request.params.id;
    const dadosAtualizados = request.body;
    const ciclista = ciclistas.find(c => c.id === id);

    if (!ciclista) {
      return reply.status(404).send('Ciclista não encontrado');
    }

    ciclista.meioDePagamento = { ...ciclista.meioDePagamento, ...dadosAtualizados };

    return reply.status(200).send('Dados do cartão de crédito atualizados');
  } catch (error) {
    console.error(error);
    reply.status(422).send('Dados inválidos');
  }
};

module.exports = {
  getCiclistas,
  criarCiclista,
  getCiclistaById,
  atualizarCiclista,
  ativarCadastroCiclista,
  permiteAluguel,
  getCartaoCredito,
  atualizarCartaoCredito
}