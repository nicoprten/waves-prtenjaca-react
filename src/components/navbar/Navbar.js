import './navbar.css';
import CartWidget from './../cartWidget/CartWidget.js';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className='card__nav'>
            <Link to='/' className='nav__link__logo'>
                <img className='nav__img' src={'./img/instalogo.png'} alt='logo de new waves'/>
            </Link>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <Link to='/' className='nav__link'>Inicio</Link>
                </li>
                <li className='nav__item'>
                    <Link to='/productdetail' className='nav__link'>Productos</Link>
                </li>
                <li className='nav__item'><CartWidget/></li>
            </ul>
        </div>
    );
}

export default Navbar;