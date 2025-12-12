function verificaPrimo(numero){
    let contador = 1,numeroDivisores = 0;

    while(contador<=numero){

        if(numero % contador === 0){
            numeroDivisores++;
        }
        contador++;
    }

    return numeroDivisores === 2? true : false;
}

const verificaPrimoFlecha = numero =>{
    let numeroDivisores = 0;

    for(let contador=1;contador<=numero;contador++){

        if(numero % contador === 0) numeroDivisores++;
    }

    return numeroDivisores === 2? true : false;
}

const parOuImpar = numero => numero % 2 === 0 ? true : false ;

console.log(verificaPrimoFlecha(37));