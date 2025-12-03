let pedido = Math.round(Math.random()*7)+99;
let quantidade = Math.round(Math.random()*9)+1;
let produto ='', precoUnitario = 0;
let precoFinal = 0;


switch(pedido){
    case 100: produto = "Chachorro Quente"; 
              precoUnitario = 7.5;
              break;
    case 101: produto = "Bauru Simples";
              precoUnitario = 8.1;
              break;
    case 102: produto = "Bauru com Ovo";
              precoUnitario = 9;
              break;
    case 103: produto = "Hamburger";
              precoUnitario = 15;
              break;
    case 104: produto = "Cheeseburger";
              precoUnitario = 16.8;
              break;
    case 105: produto = "Refrigerante";
              precoUnitario = 12.4;
              break
    default : console.log("pedido fora do menu");
}

precoFinal = precoUnitario * quantidade;

console.log("pedido: ",(produto!==''?produto:'-'));
console.log("quantidade: ",(produto!==''?quantidade:'-'));
console.log("preço unitário: ",(precoUnitario!==0?precoUnitario:'-'));
console.log("total: ", (precoFinal!==0?precoFinal.toFixed(2):'-'));