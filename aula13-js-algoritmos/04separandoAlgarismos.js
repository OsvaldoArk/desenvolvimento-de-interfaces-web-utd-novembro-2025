let numero = Math.round(Math.random()*899)+100;

let unidade = numero % 10;
let dezena = (numero % 100 - unidade) / 10;
let centena = Math.trunc(numero/100);

console.log(numero);
console.log('unidade: ',unidade);
console.log('dezena: ',dezena);
console.log('centena: ',centena);
