//LIBRERIAS
import React from 'react'
//IMPORTS
import data from '../../helpers/example'
//ESTILOS
import './footer.css'

const Footer = () => {

    let País = data.country_code

    return(
        <>
            <footer id="footer" className="footer"> 
                <p className="text-footer">v1.0</p>
                <p className="text-footer">Created with love ❤ by 
                    <a href="https://twitter.com/JA54312" target="_blank" rel="noopener noreferrer" alt="enlace a twitter de @JA54312">@JA54312</a>
                </p>
                <p className='text-footer'>{País}</p>
            </footer>
        </>
    )

}

export default Footer