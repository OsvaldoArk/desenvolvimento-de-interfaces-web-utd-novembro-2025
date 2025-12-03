//Fatorial de um número

function fatorial(numero){

    let fat = 1;

    while(numero >= 1){

        fat = fat * numero;

        numero--;
    }

    return fat;
}

console.log(fatorial(6));