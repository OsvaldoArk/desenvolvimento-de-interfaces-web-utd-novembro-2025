const findProdutos = async ()=>{

    const resposta = await fetch('https://fakestoreapi.com/products');

    const dados = await resposta.json();

    return dados;
}

const produtos = await findProdutos();

produtos.filter(produto => produto.price < 60)
        .map(produtoFiltrado => produtoFiltrado.title)
        .forEach(nomeProduto =>{ console.log(nomeProduto) });

produtos.filter(({price}) => price < 60)
        .map(({title}) => title)
        .forEach(nomeProduto =>{ console.log(nomeProduto) });

const produtosCaros = produtos.filter(produto=> produto.price > 200);

//console.log(produtosCaros);

