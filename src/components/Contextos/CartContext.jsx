import { createContext } from "react"
import { useState } from "react";


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
            cantidadItem.stock -= item.cantidad
        } else {
            alert("No hay suficiente Stock")
        }
    }


    return (
        <CartContext.Provider value={{ cart, setCart, inCart, sumaCant }}>
            {children}
        </CartContext.Provider>
    )
}