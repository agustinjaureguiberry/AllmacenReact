import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main";
import './App.scss'
import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemLIstContainer";
import { Carrito } from "./components/Carrito/Carrito.jsx";
import { ItemDetail } from "./components/ItemDetailContainer/ItemDetail.jsx";
import { Filtrado } from "./components/Categorias/Categorias.jsx";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartContext } from "./components/Contextos/CartContext.jsx";


function App() {

  const [cart, setCart] = useState([])

  const enCart = (item) => {
    return cart.some((prod) => prod.cod === item.cod)
  }
  const sumaCant = (item) => {
    var cantidadItem = cart.find((prod) => prod.cod === item.cod)
    if (cantidadItem.cantidad <= item.stock) {
      cantidadItem.cantidad += item.cantidad
      cantidadItem.stock -= item.cantidad
    } else {
      alert("No hay suficiente Stock")
    }
  }

  return (

    <CartContext.Provider value={{ cart, setCart, enCart, sumaCant }}>
      <BrowserRouter >
        <Header />
        <Main>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/:itemId' element={<ItemDetail />} />
            <Route path='/productos/:categoriaId' element={<Filtrado />} />
            <Route path='/cart' element={<Carrito />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        </Main>



      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
