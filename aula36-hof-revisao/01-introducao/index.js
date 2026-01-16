const produtos = [
    {id:1,nome:'abacaxi',preco:4.1,tipo:'fruta'},
    {id:2,nome:'leite',preco:5.8,tipo:'laticínio'},
    {id:3,nome:'laranja',preco:3.2,tipo:'fruta'},
    {id:4,nome:'sabonete',preco:4,tipo:'higiene'},
    {id:5,nome:'arroz',preco:5,tipo:'cereal'},
    {id:6,nome:'abacate',preco:8,tipo:'fruta'},
    {id:7,nome:'yorgute',preco:7.4,tipo:'laticínio'},
    {id:8,nome:'limão',preco:2.1,tipo:'fruta'},
    {id:9,nome:'tv',preco:1250,tipo:'eletrônico'},
    {id:10,nome:'shampoo',preco:30,tipo:'higiene'},
]

produtosComReajuste = []

for(let produto of produtos){
    //console.log(`nome: ${produto.nome}, preço: ${produto.preco}`);
}

produtos.forEach(produto => produtosComReajuste.push({...produto,preco:produto.preco*1.2}));

produtosComReajuste.forEach(p=>console.log(p));
