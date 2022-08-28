import './style/NavBar.css'
import logo from '../logo.svg'


const NavBar = () => {

    return (
        <div className="navContainer">
            <ul>
                <li href="#">Productos</li>
                <li href="#">Stock</li>
                <li href="#">Carrito</li>
                <li href="#">Finanzas</li>
            </ul>
            <div className='loginContainer'>
                <a className="login" href="http://www.google.com">User</a>
                <img src={logo} alt="" className="logotipo" />
            </div>
        </div>
    )
}


export default NavBar