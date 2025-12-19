import { findProdutos } from "./service.js";

const criaTabela = async () =>{
    
    const tabela = document.getElementById('tabela-produtos');

    const corpo = tabela.firstElementChild.nextElementSibling;

    console.log(corpo);

    const produtos = await findProdutos();

    for(let produto of produtos){
        const linha = document.createElement('tr');

        for(let atributo in produto){

            const coluna = document.createElement('td');
            
            if(atributo==='image'){
               const imagem = document.createElement('img');
               
               imagem.setAttribute('src',produto[atributo]);

               imagem.setAttribute('width','80');

               coluna.appendChild(imagem);
            }
            else if(atributo==='rating'){
                for(let att in produto[atributo]){
                    const col = document.createElement('td');
                    
                    col.innerText = produto[atributo][att];
                    
                    if(att==='rate'){
                        const novoValor = produto[atributo][att].toString().replace('.',',');

                        col.innerText = novoValor;
                    }

                    linha.appendChild(col); 
                }
                continue;
            }
            else if(atributo==='price'){

                coluna.innerText = produto[atributo].toString().replace('.',',');
            }
            else{
                coluna.innerText = produto[atributo];
            }

            linha.appendChild(coluna);
        }

        corpo.appendChild(linha);
    }
}

export {criaTabela};

