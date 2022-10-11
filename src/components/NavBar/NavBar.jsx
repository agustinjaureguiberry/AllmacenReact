import './style/NavBar.scss'
import logo from '../../logo.svg'
import { CartWidget } from '../CartWidget/CartWidget'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { CartContext } from "../Contextos/CartContext"
import { UserContext } from '../Contextos/UserContext';



const NavBar = () => {

    const { cart } = useContext(CartContext)
    const { user } = useContext(UserContext)

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
                {
                    user && <Link className='carroContainer' to='/'>Modificaciones</Link>
                }
                {
                    (cart.length > 0) ?
                        <Link to="/cart"><CartWidget /></Link>
                        : <Link to="/"><CartWidget /></Link>
                }
                <Link to="/Login" className="login" >
                    <Stack direction="row" spacing={2}>
                        {
                            user ? <>
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
                                <span>{user.email}</span>
                            </> :
                                <span>Logueate</span>
                        }

                    </Stack>
                </Link>

            </div>
        </div>
    )
}


export default NavBar