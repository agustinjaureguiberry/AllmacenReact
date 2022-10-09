import { Navigate, Link } from 'react-router-dom'
import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../Contextos/CartContext';

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
            <div className='cantidad'>
                <input type={'number'} id="inputCantidad" placeholder={item.cantidad} />
            </div>
            <p className='precioTotal'>${(item.precio * item.cantidad)}</p>
            <DeleteIcon onClick={() => quitaProd(item.cod)} color="error" sx={{ fontSize: 35 }} />
        </div>


    )
}