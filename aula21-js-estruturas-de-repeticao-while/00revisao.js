//Fatorial 5! = 5 * 4 * 3 * 2 * 1 = 120

function fatorialRecursiva(numero){
    if(numero === 1) return 1;
    return numero * fatorialRecursiva(numero-1);
}

function fatorialRecursivaTernaria(numero){
    return numero === 1 ? 1 : numero * fatorialRecursiva(numero-1);
}

const fatRecFlecha  = numero => numero === 1 ? 1 : numero * fatorialRecursiva(--numero);

console.log(fatRecFlecha(5));