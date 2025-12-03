// = operador de atribuição
let operador = 'atribuição';

// operadores aritméticos: + - / * %

let media = (10 + 6) / 2;
//console.log(media);

const resto = 109 % 8;
//console.log(resto);

//operadores de comparação > ou >= , < ou <= , == ou === , != ou !== 
//console.log(100 <= 800);
//console.log(37!='37');
//console.log(37!=='37');

//operadores lógicos && || 
//bolo e suco de uva
//console.log(true && true);
//console.log(true && false);
//console.log(false && true);
//console.log(false && false);

//condições dirigir carro = maior de idade && passado no exame && cnh dentro validade && cnh ativa
// frango || carne
//console.log(true||true);
//console.log(false||true);
//console.log(true||false);
//console.log(false||false);

//isenção concurso = doador de sangue || doador de médula || terminou em escola pública || está em situação de vulnerabilidade social

//operador ternário (condicao) ? (valor se verdadeiro) : (valor se falso)
let idade = 16, passouNaProva = true
let podeDirigir = idade >= 18 && passouNaProva ? "pode dirigir" : "não pode dirigir";

let a = 30 , b = 100, c = 50

//console.log(a>=b? a>=c? a : c : b>=c? b : c);

podeDirigir = idade >= 18 ?( passouNaProva ? "pode dirigir" : "não passou na prova" ): "não tem idade";
console.log(podeDirigir);
