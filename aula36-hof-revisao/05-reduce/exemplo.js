const numeros = [30,10,57,89,23,16,7,3,100,99];

const soma = numeros.reduce((total,numero)=>total+=numero,0);

const media = numeros.reduce((total,numero)=>total+=numero,0) / numeros.length;

console.log(soma);
console.log(media);