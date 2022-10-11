import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react'
import Stack from '@mui/material/Stack';
import Fingerprint from '@mui/icons-material/Fingerprint';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { UserContext } from '../../Contextos/UserContext';




export const Login = (options) => {

    const { loguer } = useContext(UserContext)

    //FUNCIONES NECESARIAS PARA LOGUEO
    const [form, setForm] = useState({
        usuario: '',
        password: ''
    })

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        loguer(form)
    }


    //FUNCIONES NECESARIAS PARA VISUALIZACION DE PASSWORD EN ESCRITURA
    const [values, setValues] = useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };



    //RETORNO FINAL

    return (
        <>
            <form onSubmit={handleSubmit} className='loguerContainer' action="">
                <h2>Solo administradores</h2>
                <p>Debera loguearse antes de continuar</p>
                <TextField name='usuario' onChange={handleForm} id="outlined-basic" sx={{ width: 350 }} label="Usuario" variant="standard" />
                <FormControl className='pass' sx={{ width: 350 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        name='password'
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleForm}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Stack direction="row" spacing={1}>
                    <IconButton onClick={handleSubmit} type='submit' aria-label="fingerprint" color="success">
                        <Fingerprint sx={{ width: 350 }} />
                    </IconButton>
                </Stack>
            </form>
        </>
    )
}