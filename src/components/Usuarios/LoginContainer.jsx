
import './style/Login.scss'
import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from '../../firebase/firebase';
import { SpinnerMio } from '../Spinner/SpinnerMio';
import { Login } from './Login/Login';


export const LoginContainer = () => {

    const [admin, setAdmin] = useState([])
    const [loading, setLoading] = useState(true)
    const options = []

    const cargaOp = (op) => {
        if (op.length > 0) {
            op.forEach((e) => options.push(e.usuario))
        }
    }

    cargaOp(admin)

    useEffect(() => {
        const adminRef = collection(db, 'admin')
        setLoading(true)
        getDocs(adminRef)
            .then((snapshot) => {
                const adminDb = snapshot.docs.map((doc) => ({ ...doc.data() }))
                setAdmin(adminDb)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className='loguerContainer'>
            {
                loading ? <SpinnerMio /> : <Login options={options} />
            }
        </div>
    )
}