import "./App.css";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Tabela from "./components/Tabela";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Tabela />
      </Container>
    </>
  );
}

export default App;
