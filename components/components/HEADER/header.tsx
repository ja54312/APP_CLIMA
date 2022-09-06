//LIBRERIAS
import React from 'react'
//IMPORTS
import Image from 'next/image'
import data from '../../helpers/example'
//ESTILOS
import styles from './header.module.css'

const Header = () => {

    let País = data.country_code
    let Ciudad = data.city_name
    //console.log(País,Ciudad)

    return(
        <>
            <header id="header" className={styles.header}>
                <nav className={styles.headerNavbar}>
                    <div className={styles.containerFluid}>
                        <div className={styles.containerLogo}>
                            <Image src='/images/nube01.png' alt='icono de nube' width='40px' height='40px' className={styles.headerLogo}/>
                            <div className={styles.headerTitle}>App Clima</div>
                        </div>
                        <div></div>
                        <div className={styles.containerCiudad}>
                            <span>{Ciudad},{País}</span>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header