let linguagens = ['python', 'java', 'python', 'javascript', 'java', 'c++', 'java']

let resposta = []

for(let contador = 0;contador<linguagens.length;contador++){
    if(linguagens[contador]!=='java')
        resposta.push(linguagens[contador]);
}

for(let contador = 0;contador<linguagens.length;contador++){
    if(linguagens[contador]==='java')
        linguagens.splice(contador,1);
}

console.log(resposta);
console.log(linguagens);