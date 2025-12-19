function multiplica(multiplicador){
    return function(numero){
        return multiplicador * numero;
    }
}

const multi = multiplicador => numero => multiplicador * numero;

const dobro = multi(2);

const quintuplo = multi(5);

console.log(dobro(14));

console.log(quintuplo(14));
