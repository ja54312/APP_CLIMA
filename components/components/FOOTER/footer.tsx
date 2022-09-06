//LIBRERIAS
import React from 'react'
//IMPORTS
import data from '../../helpers/example'
//ESTILOS
import styles from './footer.module.css'

const Footer = () => {

    let País = data.country_code

    return(
        <>
            <footer id="footer" className={styles.footer}> 
                <p className={styles.text_footer}>v1.0</p>
                <p className={styles.text_footer}>Created with love ❤ by 
                    <a href="https://twitter.com/JA54312" target="_blank" rel="noopener noreferrer">@JA54312</a>
                </p>
                <p className={styles.text_footer}>{País}</p>
            </footer>
        </>
    )

}

export default Footer