import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main";
import './App.scss'
import ItemListContainer from "./components/ItemListContainer/ItemLIstContainer";

function App() {
  return (
    <div >
      <Header />
      <Main>
        <ItemListContainer nombre="Agustin Jaureguiberry" edad="29 Años" direccion="Calle Falsa 123" />
      </Main>
      <div>

      </div>

    </div>
  );
}

export default App;
