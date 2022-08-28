import React from 'react'
import Logo from '../../../ASSETS/nube01.png'
import './header.css'

const Header = () => {
    return(
        <>
            <header id="header" className="header">
                <nav className="header-navbar">
                    <div className="container-fluid">
                        <img src={Logo} className='header-logo'/>
                        <div className='header-title'>App Clima</div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header