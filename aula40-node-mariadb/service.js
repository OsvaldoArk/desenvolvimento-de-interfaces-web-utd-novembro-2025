import { pool } from "./conexao/conectionFactory.js";


export const createCliente = async (cliente)=>{

    const {nome,dataNascimento,email} = cliente;

    const con = pool.getConnection();

    (await con).query("insert into clientes(nome,data_nascimento,email) values(?,?,?)",[nome,dataNascimento,email]);

    return cliente;
}

export const getClientes = async ()=>{
    const con = pool.getConnection();

    const clientes = (await con).query(`select * from clientes`);

    return clientes;
}