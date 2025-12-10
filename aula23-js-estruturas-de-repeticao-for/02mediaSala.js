let notas = [],numeroDeAlunos = 8, soma = 0;

for(let contador = 0; contador<numeroDeAlunos; contador++){
    notas.push(Math.round(Math.random()*5)+5);
}

for(let contador = 0; contador<numeroDeAlunos;contador++){
    //soma = soma + notas[contador];
    soma=soma+notas[contador];
}

console.log(notas);
console.log(soma)
console.log('média: ',(soma/numeroDeAlunos));