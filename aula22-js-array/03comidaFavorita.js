let comidas = [],estatistica = [],preferencia = [];
let contador = 0;

let pesquisa = [
    ['CE','peixada'],
    ['BA','acarajé'],
    ['RN','cuscuz'],
    ['PE','baião'],
    ['AL','peixada'],
    ['PB','peixada'],
    ['PI','baião'],
    ['MA','cuscuz']
]

while(contador<pesquisa.length){
    if(!comidas.includes(pesquisa[contador][1])){
        comidas.push(pesquisa[contador][1]);
    }
    contador++;
}

contador = 0;

while(contador<comidas.length){
    let item = [],estados = [],contador2=0;
    //item[peixada];
    item.push(comidas[contador]);
    item.push(0);

    preferencia.push([comidas[contador],[]])

    while(contador2<pesquisa.length){
        if(pesquisa[contador2][1]===comidas[contador]){
            item[1]++;
            estados.push(pesquisa[contador2][0])
        }
        contador2++;
    }

    estatistica.push(item);
    preferencia[contador][1] = estados;
    contador++;
}
console.log(comidas);
console.log(estatistica)
console.log(preferencia);