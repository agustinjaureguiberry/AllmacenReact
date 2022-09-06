import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main";
import './App.scss'
import ItemListContainer from "./components/ItemListContainer/ItemLIstContainer";
import { ItemDetail } from "./components/ItemDetailContainer/ItemDetail.jsx";
import { Contacto } from "./components/Contacto/Contacto.jsx";
import { Nosotros } from "./components/Nosotros/Nosotros.jsx";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter >
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/:itemId' element={<ItemDetail />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </Main>



    </BrowserRouter>
  );
}

export default App;
