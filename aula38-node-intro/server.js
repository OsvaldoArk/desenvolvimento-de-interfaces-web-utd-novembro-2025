const { createServer } = require('http');

const hostName = '127.0.0.1';
const port = '8080';

const server = createServer((req,res)=>{
    res.statusCode = '200';
    res.write(`<h1 style='color:red'>Primeiro servidor usando o nodejs</h1>`,'utf-8',()=>{
        console.log('teste');
    });
    res.end();
});

server.listen(port,hostName,()=>{
    console.log(`servidor online em: http://${hostName}:${port}`);
});
