import { BsPencilFill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";

function Table({cursos}){

    return(
        <>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>curso</th>
                    <th>professor(a)</th>
                    <th>turno</th>
                    <th colspan={2}>ações</th>
                </tr>
                </thead>
                <tbody>
                {cursos.map(c=><tr>
                                <td>{c.id}</td>
                                <td>{c.titulo}</td>
                                <td>{c.professor}</td>
                                <td>{c.turno}</td>
                                <td>
                                    <button>
                                    <BsPencilFill />
                                    </button>
                                    </td>
                                <td>
                                    <button>
                                    <BsFillTrash3Fill />
                                    </button>
                                </td>
                                </tr>)}
                </tbody>
            </table>
        </>
    );
}

export default Table;