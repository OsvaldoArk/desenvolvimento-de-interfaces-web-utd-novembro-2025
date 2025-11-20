function numeroAleatorio(){
    return Math.round(Math.random()*59)+1;
}

let numero1 = numeroAleatorio();
let numero2 = numeroAleatorio();
let numero3 = numeroAleatorio();
let numero4 = numeroAleatorio();
let numero5 = numeroAleatorio();
let numero6 = numeroAleatorio();

//console.log(numero1,'-',numero2,'-',numero3,'-',numero4,'-',numero5,'-',numero6);

function numeroAleatorioRecursiva(numero,resultado){
    n = (Math.round(Math.random()*59)+1).toString();
    
    return numero<=0? resultado : numeroAleatorioRecursiva(numero-1,resultado+' '+n);
}

let r = numeroAleatorioRecursiva(10,"");

console.log(r);