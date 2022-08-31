import './style/Producto.scss'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export const Producto = ({ productos = [] }) => {

    return (
        <div className="productoContainer">
            {productos.map((prod) => {
                return (
                    <div className="card" key={prod.cod}>
                        <img Style="border-radius: 10px" src={prod.img} alt="Imagen de producto" />
                        <p><strong>{prod.descripcion} </strong></p>
                        <h3>Precio: $ {prod.precio}</h3>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" color="success">
                                Ver Mas
                            </Button>
                        </Stack>
                        <p>Cantidad en stock: {prod.stock}</p>
                    </div>

                )
            }
            )
            }
        </div>
    )
}