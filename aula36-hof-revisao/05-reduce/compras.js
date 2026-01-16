const produtos = [
    {id:1,descricao:'laranja',preco:3.1,quantidade:2,cancelado:false},
    {id:2,descricao:'abacate',preco:8.7,quantidade:4,cancelado:false},
    {id:3,descricao:'mamão',preco:5,quantidade:2,cancelado:true},
    {id:4,descricao:'limão',preco:1.9,quantidade:1,cancelado:false},
    {id:5,descricao:'maçã',preco:9.4,quantidade:3,cancelado:false},
]

//const total = produtos.reduce((total,produto)=>total+=(produto.preco*produto.quantidade),0);

const total = produtos.filter(produto => !produto.cancelado)
                    .reduce((total,{preco,quantidade})=>total+=(preco*quantidade),0);

console.log(total);