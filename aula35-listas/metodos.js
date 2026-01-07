const lista = [4,5,3,2,1]
const palavras = ['zebra','casa','avião','dedo','bola','índio']

lista.unshift(0);
lista.push(6);

//console.log(lista);

lista.shift();
lista.pop();

//console.log(lista);

const novalista = lista.join(' ');

const velhaLista = novalista.split(' ');
/*
console.log(typeof(lista));
console.log(typeof(novalista));
console.log(novalista);
console.log(typeof(velhaLista));
console.log(velhaLista);

console.log(velhaLista.slice(1,3));

console.log(velhaLista);
console.log(lista.indexOf(4));

console.log(lista.includes(5));

//lista.reverse();

lista.sort((atual,proximo)=> atual - proximo);

palavras.sort((atual,proximo)=> proximo.localeCompare(atual));

console.log(palavras);

console.log('casa'.localeCompare('cama'));
console.log('palavra'.replace('v','p'));
console.log('palavra'.substring(2,4));
console.log('palavra'.toUpperCase());
*/

console.log(' palavra '.trim);
