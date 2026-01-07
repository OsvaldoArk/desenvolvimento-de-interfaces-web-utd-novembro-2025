import Produto from './Produto.js';
import Cliente from './Cliente.js';

const osvaldo = new Cliente(1,'Osvaldo Souza','bronze');

const p = new Produto(11,'arroz',4,'cereal');

console.log(p);

osvaldo.promoverCliente();

osvaldo.promoverCliente();

osvaldo.promoverCliente();

console.log(osvaldo);

console.log('preço final: ',osvaldo.calculaPrecoFinal(p));