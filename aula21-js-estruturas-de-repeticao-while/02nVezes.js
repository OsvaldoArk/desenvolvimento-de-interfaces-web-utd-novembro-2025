let numero = Math.round(Math.random()*100);

function repeteNVezes(vezes){
    let resultado = '';

    while(vezes >= 0){
       resultado = resultado.concat(vezes+' ');

        vezes--;
    }
    return resultado;
}

console.log(repeteNVezes(numero));