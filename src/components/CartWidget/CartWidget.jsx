import { useContext } from 'react'
import carro from '../../assets/img/cart.svg'
import { CartContext } from '../Contextos/CartContext'
import './style/style.scss'



export const CartWidget = () => {
    const { cart } = useContext(CartContext)

    return (
        <div className='carroContainer'>
            <span className={(cart.length > 0) ? "spanView" : ""} >{cart.reduce((acum, item) => acum + item.cantidad, 0)}</span>
            <img src={carro} alt="" className="carro" />
        </div>
    )

}

