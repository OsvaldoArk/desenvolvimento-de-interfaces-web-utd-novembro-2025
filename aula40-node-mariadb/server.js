import express from 'express';
import { createCliente, getClientes } from './service.js';

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const port = '8080';
const host = 'localhost';

app.post('/clientes',async (req,res)=>{
    const cliente = req.body;

    const resposta = await createCliente(cliente);

    res.status(200).json(resposta)
});

app.get('/clientes',async (req,res)=>{
    const resposta = await getClientes();

    for(let objeto of resposta){
        for(let propriedade in objeto){

            if(propriedade === 'id'){
    
                console.log(propriedade);
    
                objeto[propriedade] = Number.parseInt(objeto[propriedade]);
            }
        }
    }

    console.log(resposta);

    res.status(200).json(resposta);
})

app.listen(port,host,()=>{
    console.log(`http://localhost:8080`);
})