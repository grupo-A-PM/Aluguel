const { v4: uuidv4 } = require('uuid');

let ciclistas = [
    { id: 1, nome: 'Joao Gabriel', idade: 25, email: 'joaogabriel@example.com', cpf:11111111111, nacionalidade: "BR", senha:"12345", cartao: 123456, cvv: 123 },
    { id: 2, nome: 'Mariana', idade: 25, email: 'mariana@example.com', cpf:11111111111, nacionalidade: "BR", senha:"12345", cartao: 123456, cvv: 123 },
    { id: 3, nome: 'Joao Pedro', idade: 25, email: 'joaopedro@example.com', cpf:11111111111, nacionalidade: "BR", senha:"12345", cartao: 123456, cvv: 123 },
    { id: 4, nome: 'Jessica', idade: 25, email: 'jessica@example.com', cpf:11111111111, nacionalidade: "BR", senha:"12345", cartao: 123456, cvv: 123 },
    { id: 5, nome: 'Paulo', idade: 25, email: 'paulo@example.com', cpf:11111111111, nacionalidade: "BR", senha:"12345", cartao: 123456, cvv: 123 },
  ];

const getCiclistas = async (request, reply) => {
  try {
    return reply.status(201).send(ciclistas)
  } catch (error) {
    console.error(error)
    reply.status(500).send('Erro ao obter ciclistas')
  }
}

const criarCiclista = async (request, reply) => {
  try {
    const novoCiclista = request.body

    // ID usando UUID
    const id = uuidv4();
    novoCiclista.id = id;

    // Verificar se o e-mail já foi utilizado por algum ciclista
    const emailExistente = ciclistas.some(c => c.email === novoCiclista.email);
    if (emailExistente) {
      return reply.status(400).send('E-mail já está em uso por outro ciclista. Escolha um email diferente.');
    }

    if (!novoCiclista.email || !novoCiclista.nacionalidade || !novoCiclista.nascimento || !novoCiclista.nome || !novoCiclista.senha) {
      return reply.status(400).send('Preencha o todos os campos obrigatórios e tente novamente')
    }

    ciclistas.push(novoCiclista)
    reply.status(201).send('Ciclista cadastrado com sucesso!')

    return reply.send(novoCiclista)
  } catch (error) {
    console.error(error)
    reply.status(500).send('Erro ao criar ciclista')
  }
}

const getCiclistaById = async (request, reply) => {
  try {
    const id = parseInt(request.params.id)
    const ciclista = ciclistas.find(c => c.id === id)

    if (!ciclista) {
      return reply.status(404).send('Ciclista não encontrado')
    }

    return reply.send(ciclista)
  } catch (error) {
    console.error(error)
    reply.status(500).send('Erro ao obter ciclista')
  }
}

const atualizarCiclista = async (request, reply) => {
  try {
    const id = parseInt(request.params.id)
    const dadosAtualizados = request.body
    const ciclista = ciclistas.find(c => c.id === id)

    if (!ciclista) {
      return reply.status(404).send('Ciclista não encontrado')
    }

    const ciclistaAtualizado = { ...ciclista, ...dadosAtualizados }
    ciclistas[ciclistas.indexOf(ciclista)] = ciclistaAtualizado

    return reply.send(ciclistaAtualizado)
  } catch (error) {
    console.error(error)
    reply.status(500).send('Erro ao atualizar ciclista')
  }
}

const ativarCadastroCiclista = async (request, reply) => {
  try {
    const id = parseInt(request.params.id);
    const ciclista = ciclistas.find(c => c.id === id);

    if (!ciclista) {
      return reply.status(404).send('Ciclista não encontrado');
    }

    ciclista.ativo = true;

    return reply.send('Cadastro ativado com sucesso!');
  } catch (error) {
    console.error(error);
    reply.status(500).send('Erro ao ativar cadastro do ciclista');
  }
};

const verificarAluguelBicicleta = async (request, reply) => {
  try {
    const id = parseInt(request.params.id);
    const ciclista = ciclistas.find(c => c.id === id);

    if (!ciclista) {
      return reply.status(404).send('Ciclista não encontrado');
    }

    if (!ciclista.ativo) {
      return reply.status(403).send('Cadastro do ciclista não ativado. Não pode alugar bicicleta');
    }
    return reply.status(200).send('Ciclista pode alugar bicicleta');
  } catch (error) {
    console.error(error);
    reply.status(500).send('Erro ao verificar aluguel de bicicleta');
  }
};

module.exports = {
  getCiclistas,
  criarCiclista,
  getCiclistaById,
  atualizarCiclista,
  ativarCadastroCiclista,
  verificarAluguelBicicleta
}