const findProdutos = async ()=>{

    const resposta = await fetch('https://fakestoreapi.com/products');

    const dados = await resposta.json();

    return dados;
}

export { findProdutos };