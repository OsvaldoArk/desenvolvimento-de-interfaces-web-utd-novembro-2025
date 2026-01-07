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

const [produto01,produto02] = produtos;

const {tipo,nome} = produto02;

console.log(produto02);
console.log('nome: ',nome);
console.log('tipo:',tipo);