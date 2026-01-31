import "./Card.css";

function Card({id,titulo,professor,turno}){

    return(
        <>
            <div className="card">
                <h1>{titulo} #{id}</h1>
                <p>período: {turno}</p>
                <p>professor(a) responsável: {professor}</p>
            </div>
        </>
    )
}

export default Card;