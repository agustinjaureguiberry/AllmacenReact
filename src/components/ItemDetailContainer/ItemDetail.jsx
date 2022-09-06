import './style/ItemDetail.scss'
import { ListaDePrecios } from "../ItemListContainer/Promises/PedirLdp"
import { useState, useEffect } from 'react'
import { Item } from './Item/Item'
import { useParams } from 'react-router-dom'


export const ItemDetail = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)

        ListaDePrecios()
            .then((resp) => {
                setItem(resp.find((prod) => prod.cod === Number(itemId)))
            })
            .catch((error) => {
                alert("El producto no existe")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])



    return (
        <div>
            {
                loading ? <h2>Cargando..</h2> : <Item id={item} />
            }
        </div>
    )
}
