import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router';
import { editCliente, getCliente } from '../../api/cliente-requests';


function EditCliente(){

    const {id} = useParams();

    const navigate = useNavigate();

    const [cliente,setCliente] = useState({
        id:'',
        nome:'',
        idade:'',
        email:''
    });

    const buscaCliente = (id)=>{

        getCliente(id).then(resposta =>{
            setCliente(resposta.data);
        });
    }

    useEffect(()=>{
        buscaCliente(id);
    },[id]);

    const handleChange = (event) =>{
        
        const {name,value} = event.target;

        setCliente((clienteAnterior)=>{
            return {
                ...clienteAnterior,
                [name]:value
            }
        }
        );
    }
    
    const editarCliente = (event) =>{
        event.preventDefault();

        editCliente(cliente).then(()=>{
            navigate('/cliente/view');
        });
    }

    return(
        <>
            <h1>editar cliente</h1>
            <form onSubmit={editarCliente}>
                
                <label>id</label>
                <input 
                type="text"
                name='id'
                value={cliente.id}
                onChange={handleChange} readOnly/>
                
                <label>nome</label>
                <input 
                type="text"
                name='nome'
                value={cliente.nome}
                onChange={handleChange} />

                <label>idade</label>
                <input 
                type="text"
                name='idade'
                value={cliente.idade}
                onChange={handleChange} />

                <label>email</label>
                <input 
                type="text"
                name='email'
                value={cliente.email}
                onChange={handleChange} />
                <button type='submit'>atualizar cliente</button>
            </form>
        </>
    );
}

export default EditCliente;
