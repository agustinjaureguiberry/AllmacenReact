import Header from "./components/Header";
import Menu from "./components/Main";
import './App.css'
import ItemListContainer from "./components/ItemLIstContainer";

function App() {
  return (
    <div >
      <Header />
      <Menu>
        <ItemListContainer nombre="Agustin Jaureguiberry" edad="29 Años" direccion="Calle Falsa 123" />
      </Menu>
    </div>
  );
}

export default App;
