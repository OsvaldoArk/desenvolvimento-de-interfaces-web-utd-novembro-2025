const numeros = [10,9,8,7,6,5,4,3,2,1];

for(let contador=0;contador<numeros.length;contador++){
    //console.log(numeros[contador]);
}

for(let numero of numeros){
    //console.log(numero);
}

for(let indice in numeros){
    console.log(numeros[indice]);
}