import { pool } from "./conexao.js";

export const getClientes = async () =>{

    const conexao = await pool.getConnection();

    const resposta = await conexao.query(`select * from clientes`);

    for(let objeto of resposta){
        for(let propriedade in objeto){
            if(propriedade==='id')
                objeto[propriedade]= Number.parseInt(objeto[propriedade]);
        }
    }

    return resposta;
}

export const getClienteById = async (id) =>{

    const conexao = await pool.getConnection();

    try {

        const cliente = await conexao.query("select * from clientes where id=?",[id]);

        for(let objeto of cliente){
            for(let propriedade in objeto){
                if(propriedade==='id')
                    objeto[propriedade]= Number.parseInt(objeto[propriedade]);   
            }
        }

        console.log(cliente);

        return cliente;

    } catch (error) {
        console.log('erro: '+error);
    } finally{
        conexao.release();
    }

}

export const createCliente = async (cliente)=>{

    const conexao = await pool.getConnection();

    try {

        const resultado = await conexao.query("insert into clientes(nome,data_nascimento,email) values(?,?,?)",[cliente.nome,cliente.dataNascimento,cliente.email])
        
        cliente.id = Number.parseInt(resultado.insertId);

        return cliente;

    } catch (error) {
        console.log("erro: "+error);
    } finally{
        conexao.release();
    }
}

export const deleteClienteById = async (id) =>{

    const conexao = await pool.getConnection();

    try {

        await conexao.query("delete from clientes where id=?",[id]);

    } catch (error) {
        console.log('erro: '+error);
    } finally{
        conexao.release();
    }

}
