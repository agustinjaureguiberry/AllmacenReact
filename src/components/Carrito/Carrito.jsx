import { ProductoCart } from "./ProductoCart/ProductoCart.jsx"
import { useContext } from "react"
import { CartContext } from "../Contextos/CartContext"
import Button from '@mui/material/Button';
import './style/Carrito.scss'
import { Navigate, Link } from "react-router-dom"
import Swal from 'sweetalert2'

export const Carrito = () => {
    const { cart, sumaCarrito, vaciarCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        Swal.fire({
            icon: 'error',
            title: '¡Cantidad de articulos 0!',
            text: 'No puede ingresar al carrito sin articulos',
        })
        return (
            <Navigate to="/" />
        )
    }

    return (
        <div className='cartContainer'>
            <div className='columnasContainer grid'>
                <p className='descripcion'>Descripcion</p>
                <p className='precio'>Precio</p>
                <p className='cantidad'>Cantidad</p>
                <p className='precioTotal'>Subtotal</p>
                <p className='borrar'>Borrar</p>
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
            <div className='botones'>
                <Button onClick={vaciarCarrito} id='borrarCarrito' variant="contained">Borrar Carrito</Button>
                <Link to='/Compra'><Button id='comprar' variant="contained">Terminar Compra</Button></Link>

            </div>
        </div >
    )
}