import { ItemCantidad } from "./ItemCantidad/ItemCantidad"
import { BotonesItem } from "./BotonesItem/BotonesItem"


export const Item = ({ item }) => {
    console.log(item.item.stock)
    return (
        <>
            <div className="imgContainer">
                <img src={item.item.img} alt="" />
            </div>
            <div className="detailContainer">
                <h2>{item.item.descripcion}</h2>
                <p>${item.item.precio}</p>
                <ItemCantidad cantidad={item.item.stock} />
                <BotonesItem />
            </div>
        </>
    )
}