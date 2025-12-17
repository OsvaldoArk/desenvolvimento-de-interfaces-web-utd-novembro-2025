document.querySelector('#pesquisar').addEventListener('click',()=>{
    const nomeDigimon = document.querySelector('#nomeDigimon').value;

    const card = document.querySelector('.card-digimon');

    const url = `https://digimon-api.vercel.app/api/digimon/name/${nomeDigimon}`;

    card.innerHTML = '';

    fetch(url).then(resposta => resposta.json())
            .then(dado =>{

                const [digimon] = dado;
                
                const {name,level,img} = digimon;
 
                const nome = document.createElement('h4');

                nome.innerText = name;

                const nivel = document.createElement('p');

                nivel.innerText = level;

                const imagem = document.createElement('img');

                imagem.setAttribute('src',img);

                imagem.setAttribute('style','width:150px;height:auto');

                card.appendChild(nome);
                
                card.appendChild(nivel);

                card.appendChild(imagem);
            }).catch(error=>{
                const erro = document.createElement('h4');

                erro.innerText = 'Digimon não encontrado';

                card.appendChild(erro);

                console.log(error);
            });
});