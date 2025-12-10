/*
for(let contador=0;contador<=100;contador++){
    console.log(contador);
}
for(let contador=0;contador<=100;contador++){
    if(contador %2 !== 0)
        console.log(contador);
}
for(let contador=1;contador<=100;contador+=2){
    console.log(contador);
}
*/

let soma = 0

//somaInverso = 1/2+1/3+1/4+...+1/100
for(let contador=0;contador<=100;contador++){
    //soma = soma + contador;
    soma+=contador;
}
console.log(soma);