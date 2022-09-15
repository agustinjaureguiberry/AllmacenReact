import { ProductoCart } from "./ProductoCart/ProductoCart.jsx"
import { useContext } from "react"
import { CartContext } from "../Contextos/CartContext"
import './style/Carrito.scss'

export const Carrito = () => {
    const { cart } = useContext(CartContext)

    const sumaCarrito = () => {
        var total = 0
        // eslint-disable-next-line array-callback-return
        cart.map((item) => {
            total += (item.cantidad * item.precio)
        })
        return total
    }

    return (
        <div className='cartContainer'>
            <div className='columnasContainer'>
                <p className='descripcion'>Descripcion</p>
                <p className='precio'>Precio</p>
                <p className='cantidad'>Cantidad</p>
                <p className='precioTotal'>Subtotal</p>
            </div>
            {
                cart.map((item) => {
                    return (
                        <ProductoCart key={item.cod} item={item} />
                    )

                })
            }
            <div className='filaTotales'>
                <p>Neto: $ {sumaCarrito()}</p>
                <p>IVA: 21%</p>
                <p>Precio final: $ {(sumaCarrito() * 1.21).toFixed(2)}</p>
            </div>
        </div>
    )
}