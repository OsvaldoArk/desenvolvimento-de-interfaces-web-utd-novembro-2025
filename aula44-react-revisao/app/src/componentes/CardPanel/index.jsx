import "./CardPanel.css"
import Card from "../Card";


function CardPanel({lista}){
    return(
        <>
        <div className="container">
            {lista.map(curso=> <Card id={curso.id} 
                                     titulo={curso.titulo} 
                                     professor={curso.professor}
                                     turno={curso.turno}
                                />)}
        </div>
        </>
    )
}

export default CardPanel;