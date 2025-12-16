const jogosDeCorrida = document.querySelectorAll('li');

const lista = document.querySelector('ul');

const jogos = lista.children;

console.log(lista.firstElementChild.nextElementSibling.innerText);

console.log(lista.lastElementChild.previousElementSibling.innerText);

console.log(lista.firstElementChild.innerText);

for(let jogo of jogosDeCorrida){
    //console.log(jogo.innerHTML);
}

const mencaoHonrosa = document.querySelector('#mencaoHonrosa');

//console.log(mencaoHonrosa.innerHTML);

const nostalgia = document.querySelector('.nostalgia');

//console.log(nostalgia.innerText);

