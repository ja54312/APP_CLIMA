//LIBRERIAS
import React from 'react'
//IMPORTS
import Image from  '../../../node_modules/next/image'
import data from '../../../database/data'
import Fecha from '../../elements/date/fecha'
import Hora from '../../elements/date/hora'
//ESTILOS
import styles from './place.module.css'

const Place = () => {

    let País = data.country_code
    let Ciudad = data.city_name
    
    return(
        <section className={styles.sectionPlace}>
            <div className={styles.containerImage}>img</div>
            <div className={styles.containerGrados}>grados</div>
            <div className={styles.containerTypeImg}>img+tipo</div>
            <hr className={styles.hr}/>
            <div className={styles.containerPlace}>
                <Image src='/images/ubicacion.png' alt='icono de ubicacion' width='20px' height='20px' className={styles.imagePlace}/>
                <span className={styles.spanPlace}>{`${Ciudad},${País}`}</span>
            </div>
            <div className={styles.containerDate}>
                <Fecha/>
                <Hora/>
            </div>
        </section>
    )
}

export default Place