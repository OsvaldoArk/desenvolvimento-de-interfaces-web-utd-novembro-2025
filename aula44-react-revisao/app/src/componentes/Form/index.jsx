import { useNavigate } from "react-router";
import { useState } from "react";

function Form({setUsuario}){

    const [cadastro,setCadastro] = useState({});

    const nav = useNavigate();

    const cadastroChange = (evento) =>{

        const {name,value} = evento.target;

        setCadastro({...cadastro,[name]:value});
    }

    const enviaDado = (evento)=>{

        evento.preventDefault();

        setUsuario(cadastro);

        nav("/users");
    }

    return (
        <>
            <form onSubmit={enviaDado}>
                <input type="text" 
                       name="nome" 
                       id="" 
                       placeholder="nome completo"
                       value={cadastro.nome} 
                       onChange={cadastroChange}
                />
                <input type="number"
                       name="idade" 
                       id=""
                       value={cadastro.idade}
                       onChange={cadastroChange} />

                <input type="text"
                       name="email"
                       id=""
                       value={cadastro.email}
                       onChange={cadastroChange} 
                />

                <input type="text" 
                       name="telefone" 
                       id=""
                       value={cadastro.telefone} 
                       onChange={cadastroChange}
                />
                <button type="submit">enviar</button>
            </form>
        </>
    )
}

export default Form;