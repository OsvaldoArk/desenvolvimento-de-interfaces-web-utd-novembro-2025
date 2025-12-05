let contador = 0;
let a = 1;
let b = 0;
let c = 0;

do{
    c = a + b;
    a = b;
    b = c;
    contador++;

    console.log(c);
}while(contador<=10);