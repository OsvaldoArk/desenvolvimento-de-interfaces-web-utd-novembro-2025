fetch('https://viacep.com.br/ws/60135180/json/').then(res=>{
    return res.json()
}).then(dado =>{
    console.log(dado);
});