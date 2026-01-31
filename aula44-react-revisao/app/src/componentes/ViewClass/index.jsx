import { useState } from "react";
import CardPanel from "../CardPanel";
import Table from "../Table";

function ViewClass(){

  const cursos = [
    {id:1,titulo:"Fullstack",turno:"vespertino",professor:"Helena Rodrigues"},
    {id:2,titulo:"PHP",turno:"noite",professor:"João da Silva"},
    {id:3,titulo:"Ciência de Dados",turno:"noite",professor:"Carlos Nascimento"},
    {id:4,titulo:"Engenharia de Software",turno:"vespertino",professor:"Larissa Magalhães"},
    {id:5,titulo:"DevOps",turno:"tarde",professor:"Luciano Cavalcante"}
  ]

  const [card,setCard] = useState(false);

  const mudaVisao = () =>{
    setCard(!card);
  }

  return(
    <>
      <button onClick={mudaVisao}>{card?"tabela":"cards"}</button>
      {
        card ? <CardPanel lista={cursos} /> : 
               <Table cursos={cursos} />
      }
    </>
  );
}

export default ViewClass;