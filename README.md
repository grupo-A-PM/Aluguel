# Aluguel
Microsserviço aluguel

Modelo: https://app.swaggerhub.com/apis/pasemes/sistema-de_controle_de_bicicletario2/1.

Endpoints necessários

POST /ciclista 
GET /ciclista/{idCiclista}
PUT /ciclista/{idCiclista}
POST /ciclista/{idCiclista}/ativar
GET /ciclista/{idCiclista}/permiteAluguel
GET /ciclista/{idCiclista}
GET /ciclista/existeEmail/{email}

Entrega deve ter:

Testes unitários em abundância (escopo de método), utilizando mocks (ex: com framework mockito) quando necessário;

A ferramenta Sonar configurada (no sonarcloud.io) com: (i) 0 Bug, (ii) 0 Vulnerability, (iii)  0 Code Smells nas severidades blocker, critical e major (minor e info sem restrições), (iv) testes unitários com cobertura de código mínima de 80% e (v) menos de 1% de duplicação de código. Obs: casos excepcionais de não atingimento dos critérios serão aceitos com justificativa;

Estar disponibilizado no Heroku (ou em outra plataforma escolhida).
