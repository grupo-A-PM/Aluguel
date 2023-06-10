<h1 align="center">
   Sistema de controle de bicicletário
</h1>

Microsserviço:
- `Aluguel`

<h4 align="center"> 
	Status: <br>
	🚧  Em construção...  🚧
</h4>

<br>
<p>Modelo:</p>
<a>https://app.swaggerhub.com/apis/pasemes/sistema-de_controle_de_bicicletario2/1.</a>

<br>
<p>Endpoints:</p>

- POST /ciclista 
- GET /ciclista/{idCiclista}
- PUT /ciclista/{idCiclista}
- POST /ciclista/{idCiclista}/ativar
- GET /ciclista/{idCiclista}/permiteAluguel
- GET /ciclista/{idCiclista}
- GET /ciclista/existeEmail/{email}

A entrega deve ter:

Testes unitários em abundância (escopo de método), utilizando mocks (ex: com framework mockito) quando necessário;

A ferramenta Sonar configurada (no sonarcloud.io) com: (i) 0 Bug, (ii) 0 Vulnerability, (iii)  0 Code Smells nas severidades blocker, critical e major (minor e info sem restrições), (iv) testes unitários com cobertura de código mínima de 80% e (v) menos de 1% de duplicação de código. 

Estar disponibilizado no Heroku (ou em outra plataforma escolhida).

<br>
<h4> 🔧 Instalação </h4>

- Clone o repositório 
```
$ git clone https://github.com/grupo-A-PM/Aluguel
```

- Acesse a pasta do projeto no terminal/cmd 
```
$ cd .\Aluguel\
```

- Instale as dependências com `npm`
```
$ npm install
```
- Inicie o servidor com `npm`
```
$ npm run dev
```

## 🚀 Como testar 
```
$ npm test
```
## 🚀 Demonstração

<h4 align="center">
  Você pode visualizar a aplicação funcionando através do link: <br>
  <a>site aqui</a>
</h4>

