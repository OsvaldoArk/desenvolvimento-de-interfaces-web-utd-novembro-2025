function gera(minimo,maximo){
    return Math.round(Math.random()*(maximo-minimo))+minimo;
}

console.log(gera(80,100));