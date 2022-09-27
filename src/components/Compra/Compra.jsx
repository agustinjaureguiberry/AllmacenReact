import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Style/Compra.scss'


export const Compra = () => {


    return (
        <div >
            <h2>checkOut</h2>

            <form className='checkoutContainer' action="">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Apellido y nombre" variant="outlined" />
                    <TextField id="outlined-basic" label="DNI" variant="outlined" />
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Direccion" variant="outlined" />
                    <TextField id="outlined-basic" label="Telefono" variant="outlined" />
                    <TextField id="outlined-basic" label="Nro de tarjeta" variant="outlined" />
                    <TextField id="outlined-basic" label="Fecha de vencimiento" variant="outlined" />
                    <TextField id="outlined-basic" label="CVV" variant="outlined" />


                </Box>
            </form>
        </div>
    )
}