import { ListaDePrecios } from "../ItemListContainer/Promises/PedirLdp"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { SpinnerMio } from '../Spinner/SpinnerMio'
import { Producto } from "../ItemListContainer/Producto/Producto"

export const Filtrado = () => {

    const [Categoria, setCategoria] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()
    console.log(categoriaId)

    useEffect(() => {
        setLoading(true)
        ListaDePrecios()
            .then((resp) => {
                setCategoria(resp.filter((prod) => prod.categoria === String(categoriaId.toLocaleLowerCase())))
                console.log(Categoria)
            })
            .catch((error) => {
                alert("No hay productos de esa categoria")
            })
            .finally(() => {
                setLoading(false)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoriaId])



    return (
        <>
            {
                loading ? <SpinnerMio /> : <Producto productos={Categoria} />
            }
        </>
    )
}