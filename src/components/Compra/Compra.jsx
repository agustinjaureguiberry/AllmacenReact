import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { CartContext } from '../Contextos/CartContext';
import { addDoc, collection } from 'firebase/firestore'
import { Navigate, Link } from "react-router-dom"
import './Style/Compra.scss'
import { db } from '../../firebase/firebase';


export const Compra = () => {

    const { cart, sumaCarrito, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [form, setForm] = useState({
        nombre: '',
        dni: '',
        email: '',
        direccion: '',
        telefono: '',
        nroTarjeta: '',
        vtoTarjeta: '',
        cvvTarjeta: ''
    })


    const handleForm = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const refDb = collection(db, 'ordenes')

        const pedido = {
            comprador: form,
            items: cart,
            total: (sumaCarrito() * 1.21)
        }
        if (form.nombre.length <= 0) {
            alert("Nombre y apellido Incorrecto")
            return
        }

        if (form.dni.length < 7) {
            alert("DNI Incorrecto")
            return
        }
        if (form.email.length < 2) {
            alert("Email Incorrecto")
            return
        }
        if (form.direccion.length < 1) {
            alert("Direccion Incorrecta")
            return
        }
        if (form.nroTarjeta.length !== 16) {
            alert("Nro de tarjeta Incorrecto")
            return
        }
        if ((form.cvvTarjeta.length < 3) || (form.cvvTarjeta.length > 4)) {
            alert("CVV Incorrecto")
            return
        }

        addDoc(refDb, pedido)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })


    }

    if (orderId) {
        console.log(orderId)
        return (

            < div className='muestraOrden' >
                <h2>Compra Exitosa</h2>
                <p>Su numero de orden es: <strong>{orderId}</strong></p>
                <h3>Recuerder guardar su numero de orden para poder recibir el pedido</h3>
                <Link to='/'><Button variant="contained">Volver al inicio</Button></Link>
            </div >
        )
    }

    if (cart.length === 0) {
        return <Navigate to='/' />
    }

    return (
        <div className='checkoutContainer' >
            <h2>Terminar compra:</h2>
            <Box className='formContainer' onSubmit={handleSubmit}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField onChange={handleForm} name='nombre' id="outlined-basic" label="Apellido y nombre" variant="outlined" />
                <TextField onChange={handleForm} name='dni' type='number' id="outlined-basic" label="DNI" variant="outlined" />
                <TextField onChange={handleForm} name='email' type='email' id="outlined-basic" label="Email" variant="outlined" />
                <TextField onChange={handleForm} name='direccion' id="outlined-basic" label="Direccion" variant="outlined" />
                <TextField onChange={handleForm} name='telefono' type='number' id="outlined-basic" label="Telefono" variant="outlined" />
                <TextField onChange={handleForm} name='nroTarjeta' type='number' id="outlined-basic" label="Nro de tarjeta" variant="outlined" />
                <TextField onChange={handleForm} name='vtoTarjeta' type='date' id="outlined-basic" label="vencimiento" InputLabelProps={{
                    shrink: true,
                }} />
                <TextField onChange={handleForm} name='cvvTarjeta' type='number' id="outlined-basic" label="CVV" variant="outlined" />
                <Button type='submit' variant="contained">Comprar</Button>
            </Box>


        </div>
    )
}