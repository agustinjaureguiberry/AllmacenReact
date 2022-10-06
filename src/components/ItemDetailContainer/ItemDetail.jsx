import './style/ItemDetail.scss'
// import { ListaDePrecios } from "../ItemListContainer/Promises/PedirLdp"
import { useState, useEffect } from 'react'
import { Item } from './Item/Item'
import { useParams } from 'react-router-dom'
import { SpinnerMio } from '../Spinner/SpinnerMio'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebase'


export const ItemDetail = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()




    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'productos', itemId)
        getDoc(docRef)
            .then((doc) => {
                setItem(({ cod: doc.id, ...doc.data() }))
            })
            .finally(() => {
                setLoading(false)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <>
            {
                loading ? <SpinnerMio /> : <Item item={item} />
            }
        </>
    )
}
