import Botao from "./componentes/Botao";
import "./App.css"
import Card from "./componentes/Card";

function App(){
  return(
    <>
      <h1>Minha primeira linha de código no REACT</h1>
      <h3>Isso é outro elemento JAVASCRIPT</h3>
      <div style={{display:'flex'}}>
      <Card titulo="HTML"></Card>
      <Card titulo="CSS"></Card>
      <Card titulo="JAVASCRIPT"></Card>
      </div>
    </>
  );
}

export default App;