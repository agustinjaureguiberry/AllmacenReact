import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main";
import './App.scss'
import ItemListContainer from "./components/ItemListContainer/ItemLIstContainer";
import { ItemDetail } from "./components/ItemDetailContainer/ItemDetail.jsx";
import { Lacteos } from "./components/Lacteos/Lacteos.jsx";
import { Dulces } from "./components/Dulces/Dulces.jsx";
import { Almacen } from "./components/Almacen/Almacen.jsx";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter >
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/:itemId' element={<ItemDetail />} />
          <Route path='/lacteos' element={<Lacteos />} />
          <Route path='/almacen' element={<Almacen />} />
          <Route path='/dulces' element={<Dulces />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </Main>



    </BrowserRouter>
  );
}

export default App;
