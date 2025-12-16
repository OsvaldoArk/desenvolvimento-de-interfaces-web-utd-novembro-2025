const condicao = true 

const minhaPromessa = new Promise((resolve,reject)=>{
    if(condicao)
        resolve({"status":"ok","message":"a promessa foi resolvida com sucesso."});
    else    
        reject({"status":"erro","message":"houve algum erro durante a execução da promessa"});
});

minhaPromessa.then(resposta=>{

                dado = resposta;

                console.log(resposta);
            }).catch(erro=>{
                console.log(erro);
            });
