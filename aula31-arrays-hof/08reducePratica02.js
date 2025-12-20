const produtos = [
   {
      "id":1,
      "name":"Jaleco",
      "description":"Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
      "price":60,
      "available":true
   },
   {
      "id":2,
      "name":"Avental",
      "description":"avental de uso cotidiano para diversas atividades",
      "price":25.80,
      "available":true
   },
   {
      "id":3,
      "name":"Touca",
      "description":"touca de banho das mais variadas cores e extra durável",
      "price":1.5,
      "available":false
   },
   {
      "id":4,
      "name":"Fronha",
      "description":"fronha 100% algodão para limpezas básicas",
      "price":2.1,
      "available":true
   },
   {
      "id":5,
      "name":"Embalagem",
      "description":"pacote de embalagens tamanho m",
      "price":5.2,
      "available":false
   },
   {
      "id":6,
      "name":"Porta talher",
      "description":"porta talher simples durável e de fácil limpeza",
      "price":12,
      "available":false
   },
   {
      "id":7,
      "name":"Porta absorvente",
      "description":"porta absorvente higiênico, de fácil limpeza e portátil",
      "price":20.8,
      "available":true
   }
]
/*
const produtosDisponiveis = produtos.filter(produto => produto.available)
                                    .map(produtoFiltrado => produtoFiltrado.name);

console.log(produtosDisponiveis);
*/

const precoTotal = produtos.filter(produto=>produto.available)
                            .reduce((total, produto)=>total+=produto.price,0);

console.log(precoTotal.toFixed(2));