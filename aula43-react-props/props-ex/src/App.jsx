import Aside from "./components/Aside";
import AsideItem from "./components/AsideItem";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "./App.css";

function App(){

  const lista = [
    {titulo:"UTD", endereco:"https://www.sct.ce.gov.br/utd/", cor:"gold"},
    {titulo:"UFC", endereco:"https://www.ufc.br/", cor:"blue"},
    {titulo:"UECE", endereco:"https://www.uece.br/", cor:"orangered"},
    {titulo:"IFCE", endereco:"https://portal.ifce.edu.br", cor:"green"}
  ];

  return (
    <>
      <div className="container">
        <Nav></Nav>
        <Aside>
          {lista.map(i => <AsideItem titulo={i.titulo} endereco={i.endereco} cor={i.cor}/>)}
        </Aside>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
