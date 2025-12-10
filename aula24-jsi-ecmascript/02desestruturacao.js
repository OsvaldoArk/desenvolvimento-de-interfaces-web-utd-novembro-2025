const corredores = ['samanta','luiz','milena','vanessa','paulo','marcos','ivone'];

//const primeiro = corredores[0];
//const segundo = corredores[1];
//const terceiro = corredores[2];

const [primeiro,segundo,terceiro,...participacao] = corredores;

console.log(primeiro);
console.log(segundo);
console.log(terceiro);
console.log(participacao);