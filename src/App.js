import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main";
import './App.scss'
import ItemListContainer from "./components/ItemListContainer/ItemLIstContainer";
import { Carrito } from "./components/Carrito/Carrito.jsx";
import { ItemDetail } from "./components/ItemDetailContainer/ItemDetail.jsx";
import { Filtrado } from "./components/Categorias/Categorias.jsx";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from "./components/Contextos/CartContext.jsx";
import { Compra } from "./components/Compra/Compra.jsx";
import { LoginContainer } from "./components/Usuarios/LoginContainer.jsx";


function App() {


  return (

    <CartProvider >
      <BrowserRouter >
        <Header />
        <Main>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetail />} />
            <Route path='/productos/:categoriaId' element={<Filtrado />} />
            <Route path='/Compra' element={<Compra />} />
            <Route path='/Cart' element={<Carrito />} />
            <Route path='/Login' element={<LoginContainer />} />
            <Route path='/*' element={<Navigate to="/" />} />
          </Routes>
        </Main>



      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
