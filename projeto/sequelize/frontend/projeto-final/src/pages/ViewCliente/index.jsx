import {Link} from 'react-router';
import {useEffect, useState} from 'react';
import { getClientes, removeCliente } from "../../api/cliente-requests";
import {FaTrash,FaEdit} from 'react-icons/fa';
function ViewCliente(){

    const [clientes,setClientes] = useState([]); 

    const carregaClientes = () =>{
        getClientes().then(resposta =>{

            setClientes(resposta.data);
        });
    }

    useEffect(()=>{
        carregaClientes();
    },[]);

    const deleteCliente = (id)=>{
        removeCliente(id).then(()=> carregaClientes());
    }

    return(
        <>
            <h1>ViewCliente</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>idade</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                {clientes.map(cliente=>(
                            <tr key={cliente.id}>
                            <td data-label="Id" >{cliente.id}</td>
                            <td data-label="Nome" >{cliente.nome}</td>
                            <td data-label="Idade" >{cliente.idade}</td>
                            <td data-label="Endereco">{cliente.email}</td>
                            <td>
                                
                                <Link to={`../edit/${cliente.id}`}><button><FaEdit/></button></Link>
                                <button onClick={()=>deleteCliente(cliente.id)}><FaTrash/></button>
                            </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
}

export default ViewCliente;
