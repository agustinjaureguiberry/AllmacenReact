import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { CartContext } from '../Contextos/CartContext';
import './Style/Compra.scss'


export const Compra = () => {

    const { cart, sumaCarrito } = useContext(CartContext)

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

        console.log(pedido)
        alert("Compra realizada, revise la consola")
    }


    return (
        <div >
            <h2>checkOut</h2>
            <form onSubmit={handleSubmit} className='checkoutContainer' action="">
                <Box
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
                    <TextField onChange={handleForm} name='vtoTarjeta' type='date' id="outlined-basic" label="Fecha de vencimiento" variant="outlined" />
                    <TextField onChange={handleForm} name='cvvTarjeta' type='number' id="outlined-basic" label="CVV" variant="outlined" />
                </Box>
                <Button type='submit' variant="contained">Comprar</Button>
            </form>
        </div>
    )
}