import "./asideItem.css"

function AsideItem({titulo,endereco,cor}){
    return(
        <>
            <a style={{color:cor}} href={endereco}>{titulo}</a>
        </>
    );
}

export default AsideItem;