import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./Card.css";
import Botao from "../Botao";

function Card({titulo}){

    return(
        <>
            <div className="card-especification">
                <div className="icon">{titulo}</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo asperiores tempore quis temporibus repellendus possimus ex architecto ducimus, vero sequi eos. Beatae aliquam reiciendis nostrum, repellendus porro harum minus unde!</p>
                <Botao></Botao>
            </div>
        </>
    );
}

export default Card;