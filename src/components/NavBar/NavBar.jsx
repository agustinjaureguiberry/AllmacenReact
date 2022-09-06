import './style/NavBar.scss'
import logo from '../../logo.svg'
import Carrito from '../CartWidget/CartWidget.jsx'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <div className="navContainer">
            <ul>
                <li><Link to="/">Productos</Link></li>
                <li><Link to="/Nosotros">Nosotros</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
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