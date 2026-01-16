//clone forEach
const objeto = {
    array:[],
    funcao : function(fn){
        for(let item of this.array){
            fn(item);
        }
    }
}

//clone do map
const objeto2 = {
    array:[],
    funcao : function(fn){
        let lista = []

        for(let item of this.array){
            lista.push(fn(item));
        }
        return lista;
    }
}

const lista = ['a','e','i','o','u'];

objeto.array = lista;

const item = objeto.funcao((item)=>{console.log(item.toUpperCase())});
const item2 = objeto2.funcao((item)=>item.toUpperCase());

console.log(item2);