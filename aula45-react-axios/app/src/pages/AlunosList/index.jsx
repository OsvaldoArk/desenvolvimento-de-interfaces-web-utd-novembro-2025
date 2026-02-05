import { useEffect, useState } from 'react';
import { getAlunos, postAluno } from '../../api/alunos-resquests';


function AlunosList(){

    const [lista,setLista] = useState([]);

    const aluno = {
        "nome" : "Jailson Mota",
        "data_nascimento": "2001-08-30",
        "email":"jailson@email.com"
    }

    useEffect(()=>{

        const fetchLista = async()=>{

            try {
                const resultado = await getAlunos();
                setLista(resultado.data);
                console.log(resultado);
                console.log(lista);
                
            } catch (error) {
               throw new Error('erro ao cuscar alunos '+error);
            }
        }

        fetchLista();

    },[]);

    const pesquisaAluno = async (aluno) =>{

        const alunoResposta = await postAluno(aluno)

        console.log(alunoResposta);
    }

    return(
        <>
            <button onClick={()=>{pesquisaAluno(aluno)}}>aperte aqui</button>
        </>
    );
}

export default AlunosList;