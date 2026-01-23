const express = require('express');
const db = require('./config/db.config.js');
const router = require('./rotas/route.js');
const bodyParser = require('body-parser'); 
const cors = require('cors')

const app = express();
const Cliente = db.Cliente;

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static('resources'));
app.use('/api', router);

const server = app.listen(8080, function () {

    let host = server.address().address
    let port = server.address().port
    console.log("App está rodando no endereço http://%s:%s", host, port); 
});

db.sequelize.sync({force: true}).then(() => {
    console.log('Apaga e recria a tabela usando { force: true }');
    Cliente.sync().then(() => {
        const clientes = [
            { nome: 'Pedro', idade: 23, email: 'pedro@email.com' },
            { nome: 'Sara' , idade: 31 ,  email: 'sara@email.com'},
            { nome: 'Emilly', idade: 18 ,  email: 'emilly@email.com'},
        ]
    
        clientes.map(cliente =>{
            Cliente.create(cliente);
        });
    })
});        
