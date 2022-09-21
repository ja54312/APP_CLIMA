//LIBRERIAS
import React from 'react'
//IMPORTS
import Image from  '../../../node_modules/next/image'
//ESTILOS
import styles from './date.module.css'

const Hora = () => {
    let hora = new Date().getHours();
    //let hora : number = 3
    let min = new Date().getMinutes();

    let horario :string
    hora > 12 ? horario = 'PM' : horario = 'AM'

    let horaVeinticuatro :number

    hora === 13 ? horaVeinticuatro = 1 :
    hora === 14 ? horaVeinticuatro = 2 :
    hora === 15 ? horaVeinticuatro = 3 :
    hora === 16 ? horaVeinticuatro = 4 :
    hora === 17 ? horaVeinticuatro = 5 :
    hora === 18 ? horaVeinticuatro = 6 :
    hora === 19 ? horaVeinticuatro = 7 :
    hora === 20 ? horaVeinticuatro = 8 :
    hora === 21 ? horaVeinticuatro = 9 :
    hora === 22 ? horaVeinticuatro = 10 :
    hora === 23 ? horaVeinticuatro = 11:
    hora === 24 ? horaVeinticuatro = 12 :horaVeinticuatro = hora

    return(
        <div className={styles.containerFecha}>
            <span className={styles.formatoFecha}>{` ${horaVeinticuatro}:${min} ${horario}`}</span>
        </div>
    )
}

export default  Hora