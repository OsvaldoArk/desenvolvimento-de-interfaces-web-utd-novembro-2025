import express from 'express'
import { getClientes, getClienteById, createCliente,deleteClienteById} from './modules/service.js';

const app = express();
const porta = "8080"
const host = "localhost";

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/teste',(req,res)=>{
    const mensagem = {"msg":"a rota está funcionando"};

    res.status(200).json(mensagem);
});

app.get('/clientes',async (req,res)=>{

    try {
        const clientes = await getClientes();
        
        res.status(200).json(clientes);

        if(!clientes){
            res.status(404).json({"erro":"não foi encontrado nenhum cliente."})
        }

    } catch (error) {
        throw new Error('erro ao buscar clientes '+error);
    }
});

app.get('/clientes/:id',async (req, res)=>{
    const {id} = req.params;

    const cliente = await getClienteById(id);

    res.status(200).json(cliente);
});

app.post('/clientes',async (req,res)=>{

    const cliente = req.body;

    const clienteResultado = await createCliente(cliente); 
    
    res.status(201).json(clienteResultado);
});

app.delete('/clientes/:id',async (req,res)=>{

    const {id} = req.params

    try {
        await deleteClienteById(id);

        res.status(204).json();
        
    } catch (error) {
        console.log(error);
    }


})



app.listen(porta,host,()=>{
    console.log('servidor online: http://localhost:8080');
});
