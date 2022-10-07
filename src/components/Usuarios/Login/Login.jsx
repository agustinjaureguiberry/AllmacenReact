import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Fingerprint from '@mui/icons-material/Fingerprint';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const Login = (options) => {



    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const [values, setValues] = useState({
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='loguerContainer' action="">
                <h2>Solo administradores</h2>
                <p>Debera loguearse antes de continuar</p>
                <Stack className='user' sx={{ width: 350 }} spacing={1} >
                    <Autocomplete
                        {...options}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                            <TextField {...params} label="Usuario" variant="standard" />
                        )}
                    />
                </Stack>
                <FormControl className='pass' sx={{ width: 350 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
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
                    <IconButton type='submit' aria-label="fingerprint" color="success">
                        <Fingerprint sx={{ width: 350 }} />
                    </IconButton>
                </Stack>
            </form>
        </>
    )
}