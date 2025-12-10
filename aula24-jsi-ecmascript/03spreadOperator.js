const vogais = ['a','e','i','o','u'];
const consoantes = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];

const alfabeto = [...vogais,...consoantes];

alfabeto.sort((a,b)=> a.localeCompare(b));

console.log(alfabeto);