const numeros = [1,2,3,4,5,6,7,8,9];

const resultado = numeros.reduce((total, numero)=>total+=numero,0);

console.log(resultado);

const palavras = ['o','rato','roeu','a','roupa','do','rei','de','roma'];

const ditado = palavras.reduce((resultado, palavra)=> resultado.concat(palavra+' '),'');

//console.log(ditado);
