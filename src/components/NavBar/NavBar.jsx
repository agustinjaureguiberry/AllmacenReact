import './style/NavBar.scss'
import logo from '../../logo.svg'
import { CartWidget } from '../CartWidget/CartWidget'
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
                <li><Link to="/productos/Lacteos">Lacteos</Link></li>
                <li><Link to="/productos/Almacen">Almacen</Link></li>
                <li><Link to="/productos/Dulces">Dulces</Link></li>
            </ul>
            <div className='loginContainer'>
                <img src={logo} alt="" className="logotipo" />
            </div>

            <div className='loginContainer'>
                <Link to="/cart"><CartWidget /></Link>
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