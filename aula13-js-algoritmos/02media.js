let nota01 = Math.round(Math.random()*10);
let nota02 = Math.round(Math.random()*10);
let nota03 = Math.round(Math.random()*10);
let media = (nota01+nota02+nota03)/3;
let resultado = media >= 5 ? media >= 7 ? "Aprovado" : "Final" : "Reprovado";

console.log('1ª nota: ',nota01);
console.log('2ª nota: ',nota02);
console.log('3ª nota: ',nota03);
console.log('média: ',media.toFixed(2)," resultado: ",resultado);


