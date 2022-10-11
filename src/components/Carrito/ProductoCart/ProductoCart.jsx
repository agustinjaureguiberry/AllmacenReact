import { Link } from 'react-router-dom'
import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../Contextos/CartContext';
import { Navigate } from "react-router-dom"

export const ProductoCart = ({ item }) => {

    const { cart, setCart } = useContext(CartContext)

    const quitaProd = (id) => {
        setCart(cart.filter((item) => item.cod !== id))
        return (
            <Navigate to="/cart" />
        )
    }

    return (

        <div className='prodLista grid'>
            <p className='descripcion'><Link to={`/item/${item.cod}`}>{item.descripcion}</Link></p>
            <p className='precio'>${item.precio}</p>
            <p className='cantidad'>${item.cantidad}</p>
            <p className='precioTotal'>${(item.precio * item.cantidad)}</p>
            <DeleteIcon onClick={() => quitaProd(item.cod)} color="error" sx={{ fontSize: 35 }} />
        </div>


    )
}