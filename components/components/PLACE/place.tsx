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
    let Grados = data.temp
    
    return(
        <section className={styles.sectionPlace}>
            <div className={styles.containerGeneralPlaces}>
                <div className={styles.containerImage}>
                    <Image src='/images/dia-nublado.png' alt='dia-nublado' width='50px' height='50px' className={styles.imagePlace}/>
                </div>
                <div className={styles.containerGrados}>{`${Grados}°C`}</div>
                <div className={styles.containerTypeImg}>
                    <Image src='/images/dia-nublado-b.png' alt='dia-nublado' width='20px' height='20px' className={styles.imagePlace}/>
                    <span className={styles.spanContainerTypeImg}> Dia Nublado</span>
                </div>
                <hr className={styles.hr}/>
                <div className={styles.containerPlace}>
                    <Image src='/images/ubicacion.png' alt='icono de ubicacion' width='20px' height='20px' className={styles.imagePlace}/>
                    <span className={styles.spanPlace}>{`${Ciudad},${País}`}</span>
                </div>
                <div className={styles.containerDate}>
                    <Fecha/>
                    <Hora/>
                </div>
            </div>
        </section>
    )
}

export default Place