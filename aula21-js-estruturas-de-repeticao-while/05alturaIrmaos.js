let alturaChico = 1.75;
let alturaJuca = 1.20;
let anos = 0;

while(alturaJuca<=alturaChico){
    alturaJuca+=0.03;

    alturaChico+=0.02;

    anos++;
}

console.log(anos);