const findProdutos = async ()=>{

    const resposta = await fetch('https://fakestoreapi.com/products');

    const dados = await resposta.json();

    return dados;
}

const produtos = await findProdutos();

//const nomeProdutos = []

//produtos.forEach((produto)=>{ nomeProdutos.push(produto.title);});

//const nomeProdutos = produtos.map(produto => produto.title);

const nomeProdutos = produtos.map(({title})=> title);

console.log(nomeProdutos);