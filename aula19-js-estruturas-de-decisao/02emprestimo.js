let salario = Math.round(Math.random()*1560)+1560;
let valorDoEmprestimo = Math.round(Math.random()*3000)+3000;
let numeroParcelas = Math.round(Math.random()*20)+10;
let juros = valorDoEmprestimo*(9/100)*numeroParcelas;
let valorParcela = (valorDoEmprestimo+juros)/numeroParcelas;
let resposta = '';

if(salario*0.3>=valorParcela){
    resposta = 'Empréstimo concedido com sucesso';
}
else{
    resposta = 'Empréstimo recusado';
}

console.log('valor: ',valorDoEmprestimo);
console.log('meses: ',numeroParcelas);
console.log('juros: ',juros.toFixed(2));
console.log('valor da parcela: ',valorParcela.toFixed(2));
console.log('salário: ',salario);
console.log('resultado: ',resposta);