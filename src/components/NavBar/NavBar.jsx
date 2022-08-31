import './style/NavBar.scss'
import logo from '../../logo.svg'
import Carrito from '../CartWidget/CartWidget.jsx'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';


const NavBar = () => {

    return (
        <div className="navContainer">
            <ul>
                <li href="#">Productos</li>
                <li href="#">Stock</li>
                <li href="#">Finanzas</li>
            </ul>
            <div className='loginContainer'>
                <img src={logo} alt="" className="logotipo" />
            </div>

            <div className='loginContainer'>
                <Carrito></Carrito>
                <a className="login" href="http://www.google.com">
                    <Stack direction="row" spacing={2}>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                        <span>User</span>
                    </Stack>
                </a>

            </div>
        </div>
    )
}


export default NavBar