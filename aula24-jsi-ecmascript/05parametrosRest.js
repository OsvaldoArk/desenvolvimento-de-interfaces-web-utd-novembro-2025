function soma(...numeros){
    let total = 0;
    for(let numero of numeros){
        total+=numero;    
    }
    return total;
}

console.log(soma(3,7,4,9));