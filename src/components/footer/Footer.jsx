

function Footer(){
    return(
        <div className='footer'>
            <div className='footer__data'>
                <h2>NEW WAVES</h2>
            </div>
            <div className='footer__redes'>
                <ul className='footer__lista'>
                    <li className='footer__item'>
                        <a href='https://www.instagram.com/limited.waves/' target='_blank' rel='noreferrer'>
                            <img className='footer__icon' src='../img/insta_icon.png' alt='instagram icon'/>
                        </a>
                    </li>
                    <li className='footer__item'>
                    <a href='https://www.instagram.com/limited.waves/' target='_blank' rel='noreferrer'>
                            <img className='footer__icon' src='../img/wpp_icon.png' alt='whatsapp icon'/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;