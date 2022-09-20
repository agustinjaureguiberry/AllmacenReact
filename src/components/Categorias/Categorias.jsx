// import { ListaDePrecios } from "../ItemListContainer/Promises/PedirLdp"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { SpinnerMio } from '../Spinner/SpinnerMio'
import { Producto } from "../ItemListContainer/Producto/Producto"
import { db } from "../../firebase/firebase"
import { collection, getDocs, where, query } from 'firebase/firestore'


export const Filtrado = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        setLoading(true)
        const productoRef = collection(db, 'productos')
        const consulta = query(productoRef, where('categoria', '==', String(categoriaId.toLocaleLowerCase())))

        getDocs(consulta)
            .then((snapshot) => {
                const productosDb = snapshot.docs.map((doc) => ({ cod: doc.id, ...doc.data() }))
                setProductos(productosDb)
            })
            .finally(() => {
                setLoading(false)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoriaId])



    return (
        <>
            {
                loading ? <SpinnerMio /> : <Producto productos={productos} />
            }
        </>
    )
}