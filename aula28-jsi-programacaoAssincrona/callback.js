function fetchData(url,callback){

    setTimeout(()=>{
        if(Math.random()<0.2){
            callback(new Error(`falha ao bucar ${url}`));
            return;
        }
        const data = {url,messa:`dados de ${url}${Date.now()}`};
        callback(null,data);
    },900);
}

fetchData('https://www.utd.com/1',(err,data)=>{
    if(err)   
        console.log(`Erro: ${err.message}`);
    else
        console.log('Recebido (direto):',data);
});
