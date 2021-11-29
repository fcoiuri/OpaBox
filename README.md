# Aplicação desenvolvida para o teste da vaga de Desenvolvedor Júnior na empresa Opa Soluções Tecnológicas S.A.  
## Bibliotecas/Frameworks utilizados:
* Express: Framework utilizado no Back-end para requests HTTP, como GET e o POST;
* Bootstrap: Utilizado para exibição e estilização tda página;
* Axios: Utilizado para executar um get de um json em "interlace";
* Ejs: Ajuda a enviar dados as páginas pelo Express;
* Path: Facilita a interagir com os arquivos facilmente.
* Nodemon: Ajuda na execução do código. 

#### Para executar a aplicação primeiro é necessário rodar o comando `npm install`.  Após instalar todas as dependências, pode executar `npm start` ou `nodemon app.js`. Logo, basta acessar `localhost:8080` para ver a aplicação funcionando.  

### O que foi desenvolvido?
* Um programa em JavaScript/NodeJS que escuta na porta 8080 e responde às operações: 
1. Executar HTTP - POST em /ordenaLista que recebe no body o JSON no seguinte formato:
```
{
 listas: {
 salaN: [ 1, 5, 7, 8 ],
 salaS: [ “a”, “x”, “n” ]
 }
}
```
Onde salaN é uma lista de números variados e salaS é uma lista de string variadas. A resposta retorna o mesmo objeto, porém com as listas ordenas.  

2. Executar HTTP - GET em /interlace? que recebe no body o JSON no seguinte formato:
```
{
 intervaloA: [ 20, 40 ],
 intervaloB: [ 10, 60 ]
}
```
O intervalo A e B são listas compostas de apenas 2 números. O programa verifica se os intervalos se interlaçam ou sobrepõe e responder `true` ou `false`  

Exemplos:  
```
intervalos A [20, 40] e B [ 10, 19 ] deve responder false
intervalos A [20, 40] e B [ 10, 20 ] deve responder true
intervalos A [10, 20] e B [ 20, 30 ] deve responder true
intervalos A [10, 20] e B [ 40, 50 ] deve responder false
```
Neste tópico foi decidido que a aplicação verifica o arquivo `db.json` e verifica se os intervalos se interlaçam ou sobrepõe.

3. Fazer uma página web simples para poder fazer as chamadas descritas acima e exibir os devidos resultados da execução:   

O formúlario para envio de dados do Passo 1 é apresentada em `/` e os resultados apresentados em `/ordenaLista`. Já a lista do Passo 2 é apresentada em `/` abaixo do formulário do Passo 1.
