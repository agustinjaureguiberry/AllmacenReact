import { Link } from 'react-router-dom'

export const ProductoCart = ({ item }) => {
    return (
        <Link to={`/${item.cod}`}>
            <div className='productoContainer'>
                <p className='descripcion'>{item.descripcion}</p>
                <p className='precio'>${item.precio}</p>
                <p className='cantidad'>{item.cantidad}</p>
                <p className='precioTotal'>${(item.precio * item.cantidad)}</p>
            </div>
        </Link>

    )
}