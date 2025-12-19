const findProdutos = async ()=>{

    const resposta = await fetch('https://fakestoreapi.com/products');

    const dados = await resposta.json();

    return dados;
}

const resultado = await findProdutos();

resultado.forEach((produto)=>{
    console.log(produto.title);
})

for(let produto of resultado){

    //console.log(produto.title);
}