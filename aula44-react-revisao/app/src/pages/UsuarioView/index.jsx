
function UsuarioView(props){
    return(
        <>
            <p>{props.estado.nome}</p>
            <p>{props.estado.idade}</p>
            <p>{props.estado.email}</p>
            <p>{props.estado.telefone}</p>
        </>
    )
}

export default UsuarioView;