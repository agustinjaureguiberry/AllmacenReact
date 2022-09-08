import { useState, useEffect } from "react"
import { ListaDePrecios } from "./Promises/PedirLdp"
import './style/ItemListContainer.scss'
import { Producto } from "./Producto/Producto.jsx"
import { SpinnerMio } from "../Spinner/SpinnerMio"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        ListaDePrecios()
            .then((resp) => {
                setProductos(resp)
            })
            .catch((error) => {
                alert("ERROR AL CARGAR LA LISTA DE PRECIOS")
            })
            .finally(() => {

                setLoading(false)
            }
            )
    }, [])




    return (
        <div className="itemListContainer">
            {
                loading ? <SpinnerMio /> : <Producto productos={productos} />
            }
        </div>
    )
}

export default ItemListContainer