import imagen from '../../assets/img/imagen.webp';
import './style/Header.scss';
import NavBar from '../NavBar/NavBar';

const Header = () => {

    return (
        <div className="header">
            <img src={imagen} alt="imagen" className="banner" />
            <NavBar className="navBar" />
        </div>
    )
}

export default Header