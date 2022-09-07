//LIBRERIAS
import React from 'react'
//IMPORTS
import Image from  '../../../node_modules/next/image'
import data from '../../../database/data'
//ESTILOS
import styles from './header.module.css'

// export const getServerSideProps = async () => {
//     const response = await fetch('https://github.com/ja54312/APP_CLIMA/api/index')
//     const data2:object = await response.json()
//     return {
//         data2
//     }
// }

const Header = () => {

    let País = data.country_code
    let Ciudad = data.city_name
    //console.log(País,Ciudad)
    //console.log(data2,"data2")

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