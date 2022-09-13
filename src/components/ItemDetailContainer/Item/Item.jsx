
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useState } from "react"
import { CartContext } from "../../Contextos/CartContext"
import { ItemCantidad } from "./ItemCantidad/ItemCantidad"
import { BotonesItem } from "./BotonesItem/BotonesItem"

export const Item = ({ item }) => {

    const { cart, setCart, enCart, sumaCant } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgCarrito = () => {
        const itemCarrito = {
            cod: item.cod,
            descripcion: item.descripcion,
            precio: item.precio,
            cantidad,
            stock: (item.stock - cantidad)
        }
        if (enCart(itemCarrito)) {
            sumaCant(itemCarrito)
            console.log(cart)
        } else {
            setCart([...cart, itemCarrito])
            console.log(cart)
        }
    }

    return (
        <div className='itemContainer'>
            <div className="imgContainer">
                <img src={item.imgDetail} alt="" />
            </div>
            <div className='compraCointainer'>
                <h2>{item.descripcion}</h2>
                <p id="precio">${item.precio}</p>
                <a id="mdp" href="#">ver medios de pago</a>
                <div className="cantidad">
                    <ItemCantidad cantidad={item.stock} onSelect={setCantidad} />
                </div>
                <div className="botones">
                    <BotonesItem handleAgCarrito={handleAgCarrito} />
                </div>
            </div>
            <div className="detailContainer">
                <h2>Descripcion del producto:</h2>
                <p id="detalle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident possimus laudantium minima molestias facere fugiat, repellendus accusantium, pariatur tenetur libero neque itaque illo deserunt ad incidunt doloribus numquam corporis!</p>
            </div>
        </div>
    )
}