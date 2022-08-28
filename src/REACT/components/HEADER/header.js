//LIBRERIAS
import React from 'react'

//IMPORTS
import Logo from '../../../ASSETS/nube01.png'
import data from '../../helpers/example'
//ESTILOS
import './header.css'

const Header = () => {

    let País = data.country_code
    let Ciudad = data.city_name
    //console.log(País,Ciudad)

    return(
        <>
            <header id="header" className="header">
                <nav className="header-navbar">
                    <div className="container-fluid">
                        <div className="container-Logo">
                            <img src={Logo} className='header-logo'/>
                            <div className='header-title'>App Clima</div>
                        </div>
                        <div></div>
                        <div className="container-ciudad">
                            <span>{Ciudad},{País}</span>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header