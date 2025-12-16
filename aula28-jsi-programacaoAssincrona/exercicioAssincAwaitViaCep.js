async function pesquisaLogradouro(cep){
    const resposta = await fetch(cep);
    
    const dado = await resposta.json();

    console.log(dado);
}
const cep = 'https://viacep.com.br/ws/60135180/json/'

pesquisaLogradouro(cep);