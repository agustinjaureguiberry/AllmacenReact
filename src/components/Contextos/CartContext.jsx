import { createContext } from "react"
import { useState } from "react";
import { Navigate } from "react-router-dom"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {


    const [cart, setCart] = useState([])


    const inCart = (item) => {
        return cart.some((prod) => prod.cod === item.cod)
    }
    const sumaCant = (item) => {
        var cantidadItem = cart.find((prod) => prod.cod === item.cod)
        if (cantidadItem.cantidad <= item.stock) {
            cantidadItem.cantidad += item.cantidad
        } else {
            alert("No hay suficiente Stock")
        }
    }
    const cambiaCant = (item) => {
        var cantidadItem = cart.find((prod) => prod.cod === item.cod)
        cantidadItem.cantidad = item.cantidad
    }

    const sumaCarrito = () => {
        return cart.reduce((acum, item) => acum + (item.cantidad * item.precio), 0)
    }



    const vaciarCarrito = () => {
        setCart([])
        return (
            <Navigate to="/" />
        )
    }


    return (
        <CartContext.Provider value={{ cart, setCart, inCart, sumaCant, cambiaCant, sumaCarrito, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}