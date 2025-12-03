let nota01 = Math.round(Math.random()*10);
let nota02 = Math.round(Math.random()*10);
let nota03 = Math.round(Math.random()*10);
let media = (nota01+nota02+nota03)/3;
let notaFinal
let resultado = ''

if(media>=7 && media<=10){
    resultado = 'aprovado';
}
else if(media>=3 && media<7){
    notaFinal = Math.round(Math.random()*5)+5;

    media = (media + notaFinal) / 2;

    resultado=(media >= 5 && media <= 10)? 'aprovado na avaliação final' :'reprovado';
}
else if(media >=0 && media <3){
    resultado = 'reprovado';
}
else{
    resultado = 'nota inválida';
}

console.log('1ª nota: ',nota01);
console.log('2ª nota: ',nota02);
console.log('3ª nota: ',nota03);
console.log('nota final: ',notaFinal?notaFinal:'-')
console.log('média: ',media.toFixed(2)," resultado: ",resultado);
