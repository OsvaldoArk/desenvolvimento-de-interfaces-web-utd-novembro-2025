let pessoas = [
    ['Lucas',20],
    ['Amanda',27],
    ['Marcelo',19],
    ['Lisandra',18],
    ['Roberto',33],
    ['Paula',28]
]

let maisNovo = [], maisVelho = []

for(let contador=0;contador<pessoas.length;contador++){
    if(contador===0)
        maisNovo = pessoas[0];

    if(maisNovo[1]>pessoas[contador][1])
        maisNovo = pessoas[contador];
}

for(let contador=0;contador<pessoas.length;contador++){
    if(maisVelho.length===0)
        maisVelho = pessoas[contador];

    if(maisVelho[1]<pessoas[contador][1])
        maisVelho = pessoas[contador];
}


console.log(maisNovo);
console.log(maisVelho);