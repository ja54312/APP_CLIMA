//LIBRERIAS
import React from 'react'
//IMPORTS
import Image from  '../../../node_modules/next/image'
//ESTILOS
import styles from './date.module.css'

const Fecha = () => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();

    let mes : string
    
    month === 0 ? mes = 'Ene' :
    month === 1 ? mes = 'Feb' :
    month === 2 ? mes = 'Mar' :
    month === 3 ? mes = 'Abr' :
    month === 4 ? mes = 'May' :
    month === 5 ? mes = 'Jun' :
    month === 6 ? mes = 'Jul' :
    month === 7 ? mes = 'Ago' :
    month === 8 ? mes = 'Sep' :
    month === 9 ? mes = 'Oct' :
    month === 10 ? mes = 'Nov' :
    month === 11 ? mes = 'Dic' : mes = 'no existe este mes'
    
    return(
        <div className={styles.containerFecha}>
            <Image src='/images/calendario-1.png' alt='icono de nube' width='20px' height='20px' className={styles.imageFecha}/>
            <span className={styles.formatoFecha}>{` ${day} ${mes},${year}`}</span>
        </div>
    )
}

export default  Fecha