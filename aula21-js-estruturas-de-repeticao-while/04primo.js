let numero = 111
let divisor = 1
let totalDivisores = 0;

while(divisor<=numero){

    if(numero%divisor===0)
        totalDivisores++

    divisor++;
}

if(totalDivisores===2){
    console.log('o número ',numero,' é primo.');
}
else{
        console.log('o número ',numero,' não é primo.');
}