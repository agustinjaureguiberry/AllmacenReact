import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './StyleBotones.scss'
import { Link } from 'react-router-dom';


export const BotonesItem = ({ handleAgCarrito }) => {
    return (
        <Stack spacing={2} direction="row">
            <Button onClick={handleAgCarrito} id='agCarrito' variant="contained">Agregar al carrito</Button>
            <Link to="/cart"><Button id='comprar' variant="contained">Comprar</Button></Link>
        </Stack>
    );
}