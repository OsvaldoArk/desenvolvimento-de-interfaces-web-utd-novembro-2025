//0,1,1,2,3,5,8,13,21
//fazer uma função que imprima a sequência de fibonnacci com recursividade.
let contador = 0;
let a = 1;
let b = 0;
let c = 0;

while(contador<=10){
    c = a + b;
    a = b;
    b = c;
    contador++;

    console.log(c);
}