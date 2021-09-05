import './navbar.css';

const Navbar = () => {
    return(
        <div className='card__nav'>
            <a className='nav__link' href='./index.html'><img className='nav__img' src={'./img/instalogo.png'} alt='logo de new waves'/></a>
            <ul className='nav__list'>
                <li className='nav__item'><a className='nav__link' href='./index.html'>Inicio</a></li>
                <li className='nav__item'><a className='nav__link' href='./productos.html'>Productos</a></li>
                <li className='nav__item'><a className='nav__link' href='./carrito.html'>Carrito</a></li>
            </ul>
        </div>
    );
}

export default Navbar;