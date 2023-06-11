const { v4: uuidv4 } = require('uuid');

  //Alguns ciclistas pré-cadastrados
  let ciclistas = [
  {
    id: uuidv4(),
    nome: "Joao Gabriel",
    nascimento: "2023-06-11",
    cpf: "87942565300", 
    passaporte: {
      numero: "string",
      validade: "2023-06-11",
      pais: "TX"
    },
    nacionalidade: "string",
    email: "jgevelin@example.com",
    urlFotoDocumento: "string",
    senha: "string",
    meioDePagamento: {
      nomeTitular: "string",
      numero: "984602367621417541873846007875805616119812247741040998629140438970271355",
      validade: "2023-06-11",
      cvv: "4857"
    },
    ativo: true
  },
  {
    id: uuidv4(),
    nome: "Mariana",
    nascimento: "2023-06-11",
    cpf: "87942565300", 
    passaporte: {
      numero: "string",
      validade: "2023-06-11",
      pais: "TX"
    },
    nacionalidade: "string",
    email: "user@example.com",
    urlFotoDocumento: "string",
    senha: "string",
    meioDePagamento: {
      nomeTitular: "string",
      numero: "984602367621417541873846007875805616119812247741040998629140438970271355",
      validade: "2023-06-11",
      cvv: "4857"
    },
    ativo: true
  },
  {
    id: uuidv4(),
    nome: "Joao Pedro",
    nascimento: "2023-06-11",
    cpf: "87942565300", 
    passaporte: {
      numero: "string",
      validade: "2023-06-11",
      pais: "TX"
    },
    nacionalidade: "string",
    email: "user@example.com",
    urlFotoDocumento: "string",
    senha: "string",
    meioDePagamento: {
      nomeTitular: "string",
      numero: "984602367621417541873846007875805616119812247741040998629140438970271355",
      validade: "2023-06-11",
      cvv: "4857"
    },
    ativo: true
  },
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

    novoCiclista.ativo = false;

    // Verificar se o e-mail já foi utilizado por algum ciclista
    const emailExistente = ciclistas.some(c => c.email === novoCiclista.email);
    if (emailExistente) {
      return reply.status(400).send('E-mail já está em uso por outro ciclista. Escolha um email diferente.');
    }

    if (!novoCiclista.email || !novoCiclista.nacionalidade || !novoCiclista.nome || !novoCiclista.senha) {
      return reply.status(400).send('Preencha todos os campos obrigatórios e tente novamente')
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

    const id = request.params.id
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
    const id = request.params.id
    const dadosAtualizados = request.body
    const ciclista = ciclistas.find(c => c.id === id)

    if (!ciclista) {
      return reply.status(404).send('Ciclista não encontrado')
    }

    const ciclistaAtualizado = { ...ciclista, ...dadosAtualizados }
    ciclistas[ciclistas.indexOf(ciclista)] = { ...ciclista, ...dadosAtualizados }

    return reply.send(ciclistaAtualizado)
  } catch (error) {
    console.error(error)
    reply.status(500).send('Erro ao atualizar ciclista')
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

    return reply.send('Cadastro ativado com sucesso!');
  } catch (error) {
    console.error(error);
    reply.status(500).send('Erro ao ativar cadastro do ciclista');
  }
};

const verificarAluguelBicicleta = async (request, reply) => {
  try {

    const id = request.params.id
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