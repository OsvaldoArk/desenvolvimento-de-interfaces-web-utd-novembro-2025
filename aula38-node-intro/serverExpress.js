import express from 'express';

const app = express();
const port = '8080';

app.get('/app/teste/:numero',(req,res)=>{

    const {numero} = req.params;
    console.log(numero);
    res.send(`Teste número: ${numero}`);
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})
