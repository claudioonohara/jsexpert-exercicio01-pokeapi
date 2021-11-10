### Aluno JSExpert
Claudio Toyoshi Onohara

https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem

### Checklist features
- Web API
  * [X] Deve ter uma rota raiz usada como _fallback_.
  * [ ] Deve ter uma rota de `/team`, onde: 
    * [ ] Deve consumir a PokeAPI e selecionar 3 pokemóns aleatórios
    * [ ] Deve consumir a PokeAPI para obter mais informações sobre os pokemóns escolhidos
    * [ ] Deve retornar um objeto JSON conetendo um array com 3 pokemóns, cada um com seus respectivos `name (String)` e `moves (String[])`

- Testes
  * [ ] Deve ter cobertura de testes end-2-end e unitários
  * [ ] 100% de code coverage
