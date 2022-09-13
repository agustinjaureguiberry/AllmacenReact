import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './StyleBotones.scss'


export const BotonesItem = ({ handleAgCarrito }) => {
    return (
        <Stack spacing={2} direction="row">
            <Button onClick={handleAgCarrito} id='agCarrito' variant="contained">Agregar al carrito</Button>
            <Button id='comprar' variant="contained">Comprar</Button>
        </Stack>
    );
}