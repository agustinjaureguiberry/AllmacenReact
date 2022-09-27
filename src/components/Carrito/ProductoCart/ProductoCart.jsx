import { Link } from 'react-router-dom'
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';

export const ProductoCart = ({ item }) => {
    return (

        <div className='productoContainer'>
            <p className='descripcion'>{item.descripcion}</p>
            <p className='precio'>${item.precio}</p>
            <input type={'number'} className='cantidad' />
            <p className='precioTotal'>${(item.precio * item.cantidad)}</p>
            <Link className='ver' to={`/${item.cod}`}><ViewInArOutlinedIcon color="primary" sx={{ fontSize: 35 }} /></Link>
        </div>


    )
}