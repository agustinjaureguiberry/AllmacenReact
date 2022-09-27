import { useState, useEffect } from "react"
// import { ListaDePrecios } from "./Promises/PedirLdp"
import './style/ItemListContainer.scss'
import { Producto } from "./Producto/Producto.jsx"
import { SpinnerMio } from "../Spinner/SpinnerMio"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebase"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const productoRef = collection(db, 'productos')
        getDocs(productoRef)
            .then((snapshot) => {
                const productosDb = snapshot.docs.map((doc) => ({ cod: doc.id, ...doc.data() }))
                setProductos(productosDb)
            })
            .finally(() => {
                setLoading(false)
            })
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