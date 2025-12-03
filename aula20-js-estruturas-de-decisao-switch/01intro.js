let numero01 = Math.round(Math.random()*20)+5;
let numero02 = Math.round(Math.random()*9)+1;
let opcao = Math.round(Math.random()*5);
let resultado = 0;

switch(opcao){
    case 1: resultado = (numero01+numero02)/2; break;
    case 2: resultado = numero01 - numero02; break;
    case 3: resultado = numero01 * numero02; break;
    case 4: resultado = numero01 / numero02; break;
    default: resultado = 'opção inválida';
}
console.log('x: ',numero01);
console.log('y: ',numero02);
console.log('opção: ',opcao);
console.log(resultado);