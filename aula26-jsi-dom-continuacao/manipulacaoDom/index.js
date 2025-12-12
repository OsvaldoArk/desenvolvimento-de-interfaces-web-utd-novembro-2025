const aumentaStatus = valor => valor < 9 ? ++valor : valor =9;

const diminuiStatus = valor => valor>0 ?--valor : valor = 0;

let atual = -1;

const imagens = ['capoeirista','curandeira','mago'];

document.getElementById('forcaM').addEventListener('click',()=>{
    let forca = document.getElementById('forca');

    let atributo = Number.parseInt(forca.innerText);

    forca.innerText =  diminuiStatus(atributo);
});

document.getElementById('forcaS').addEventListener('click',()=>{
    let forca = document.getElementById('forca');

    let atributo = Number.parseInt(forca.innerText);

    forca.innerText =  aumentaStatus(atributo);
});

document.getElementById('destrezaM').addEventListener('click',()=>{
    let destreza = document.getElementById('destreza');

    let atributo = Number.parseInt(destreza.innerText);

    destreza.innerText =  diminuiStatus(atributo);
});

document.getElementById('destrezaS').addEventListener('click',()=>{
    let destreza = document.getElementById('destreza');

    let atributo = Number.parseInt(destreza.innerText);

    destreza.innerText =  aumentaStatus(atributo);
});

document.getElementById('proximo').addEventListener('click',()=>{

    if(atual<2)
        atual++;
    else
        atual=0;

    const heroi = document.getElementById('imagem');

    heroi.setAttribute('src',`./imagens/${imagens[atual]}.png`);
});