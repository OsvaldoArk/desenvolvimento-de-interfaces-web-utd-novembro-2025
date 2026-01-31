import Form from "../../componentes/Form"
import { Link } from "react-router";

function SubscriptionForm({estado,metodo}){

    return (
        <>
            <Form usuario={estado} setUsuario={metodo}/>
            <Link to="/users" >voltar a página principal</Link>
        </>
    )
}

export default SubscriptionForm;