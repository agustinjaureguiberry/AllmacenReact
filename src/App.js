import Header from "./components/Header";
import Main from "./components/Main";
import './App.css'
import ItemListContainer from "./components/ItemLIstContainer";
import Contador from "./components/Contador";

function App() {
  return (
    <div >
      <Header />
      <Main>
        <ItemListContainer nombre="Agustin Jaureguiberry" edad="29 Años" direccion="Calle Falsa 123" />
        <Contador />
      </Main>
      <div>

      </div>

    </div>
  );
}

export default App;
