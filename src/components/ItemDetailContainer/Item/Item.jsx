/* eslint-disable jsx-a11y/anchor-is-valid */
import { ItemCantidad } from "./ItemCantidad/ItemCantidad"
import { BotonesItem } from "./BotonesItem/BotonesItem"



export const Item = ({ item }) => {
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
                    <ItemCantidad cantidad={item.stock} />
                </div>
                <div className="botones">
                    <BotonesItem />
                </div>
            </div>
            <div className="detailContainer">
                <h2>Descripcion del producto:</h2>
                <p id="detalle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident possimus laudantium minima molestias facere fugiat, repellendus accusantium, pariatur tenetur libero neque itaque illo deserunt ad incidunt doloribus numquam corporis!</p>
            </div>
        </div>
    )
}