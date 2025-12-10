let numeros = [65,51,48,45,13,29,53,33,40];

//[<65>,(51),48,45,13,29,53,33,40]
//[<51>,65,48,13,29,53,33,40]
//[<48>,65,51,13,29,53,33,40]
//[<13>,65,51,48,29,53,33,40]
//[13,<51>,65,48,29,53,33,40]


for(let atual = 0;atual<numeros.length;atual++){
    for(proximo=atual+1;proximo<numeros.length;proximo++){
        if(numeros[atual]>numeros[proximo]){
            let temporario = numeros[atual];
            numeros[atual] = numeros[proximo];
            numeros[proximo] = temporario;
        }
    }
}
console.log(numeros);