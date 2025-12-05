let numeros = [];
let contador = 1;
let maior = 0, menor = 0, media = 0;

while(contador<=100){

    numeros.push(Math.round(Math.random()*90)+10);

    contador++;
}

contador = 0;

while(contador<100){

    if(contador===0){
        menor = numeros[contador];
    }
    
    if(numeros[contador]<menor){
        menor = numeros[contador];
    }    

    if(numeros[contador]>maior){
        maior = numeros[contador];
    }
    //media = media + numeros[contador];
    media+=numeros[contador];

    contador++;
}

media = media/numeros.length;

console.log(numeros);
console.log('menor: ',menor);
console.log('maior: ',maior);
console.log('média: ',media);

