let salario = Math.round(Math.random()*1560)+3120;
let tempo = Math.round(Math.random()*5)+2;
let aumento = 0;

if(tempo>=5){
    aumento = 0.2;
}
else{
    aumento = 0.1;
}
salarioFinal=salario+salario*aumento;
console.log('tempo de empresta: ',tempo);
console.log('')
console.log(salario,'+',aumento*100,'%=',salarioFinal);
