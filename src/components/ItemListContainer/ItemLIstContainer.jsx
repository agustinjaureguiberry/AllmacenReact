import { useState, useEffect } from "react"
import { ListaDePrecios } from "./Promises/PedirLdp"
import './style/ItemListContainer.scss'
import { Producto } from "./Producto/Producto.jsx"



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    useEffect(() => {
        ListaDePrecios()
            .then((resp) => {
                setProductos(resp)
            })
            .catch((error) => {
                alert("ERROR AL CARGAR LA LISTA DE PRECIOS")
            })
    }, [])




    return (
        <div className="itemListContainer">
            <Producto productos={productos} />
        </div>
    )
}

export default ItemListContainer