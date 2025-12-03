let precoProduto = Math.round(Math.random()*100)+200;
let condicaoDePagamento = Math.round(Math.random()*5);
let descricao = '';
let quantidadeParcelas = 0;
let modificador = 0;
let precoFinal = 0;

switch(condicaoDePagamento){
    case 1: descricao = 'à vista em dinheiro';
            modificador = -0.1;
            quantidadeParcelas = 1;
            break;
    case 2: descricao = 'à vista no cartão';
            modificador = -0.05;
            quantidadeParcelas = 1;
            break;
    case 3: descricao = 'parcelado em duas vezes dinheiro ou cartão'
            modificador = 0;
            quantidadeParcelas = 2;
            break;
    case 4: descricao = 'parcelado em três vezes dinheiro ou cartão'
            modificador = 0.1;
            quantidadeParcelas = 3;
            break;
    default : console.log('condição de pagamento inexistente.');
}

precoFinal = precoProduto + precoProduto * modificador;

console.log('preço produto: R$',precoProduto);
console.log('condição de pagamento: ',descricao!==''?descricao:'-');
console.log('quantidade de parcelas: ',quantidadeParcelas!==0?quantidadeParcelas:'-');
console.log('total: ',precoFinal!==0?precoFinal:'-');

