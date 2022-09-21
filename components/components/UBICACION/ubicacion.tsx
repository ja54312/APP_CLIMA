//LIBRERIAS
import React, { useState } from 'react'
//HOOKS
import useModal from '../../hooks/useModal';
//COMPONENTES
import Modal from '../../elements/modal/Modal';
import data from '../../../database/data'
//ESTILOS
import styles from './ubicacion.module.css'

const Ubicacion = () => {

    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [latitude,setLatitude] = useState();
    const [longitude,setLongitude] = useState();
    //console.log(data,'data')

    // const PermiteNavegacion = () => {
    //     if(!!navigator.geolocation){
    //                      console.log('si permite')
    //                      navigator.geolocation.getCurrentPosition(
    //                         function(position:object) {
    //                             setLatitude(position.coords.latitude)
    //                             setLongitude(position.coords.longitude)
    //                         }
    //                      )
    //                  }else{
    //                      console.log('no permite')
    //                  }
    // }

    // const NoPermiteNavegacion = () => {
    //     console.log('no permite')
    // }

    return(
        <>
            {/* <div className={styles.containerUbicacion}>
                <div>Permisos para ubicacion</div>
                <button id='pedirvan' onClick={openModal}>Permisos</button>
                <div>por navegador</div>
            </div>
            <Modal isOpen={isOpenModal} closeModal={closeModal}> 
                <div className={styles.headerModalUbicacion}>
                        <div
                            className={styles.modalReact__dialogButtonClose}
                            onClick={closeModal}
                        >
                            x
                        </div>
                </div>
                <div className={styles.container_modal_ubicacion}>
                    <p className={styles.text_modal_ubicacion}>Desea permitir la ubicación en su dispositivo?</p>
                    <div className={styles.container_botones_ubicacion}>
                        <button className={`${styles.boton_ubicacion} + ${styles.Si}`} onClick={PermiteNavegacion}>Si</button>
                        <button className={`${styles.boton_ubicacion} + ${styles.No}`} onClick={NoPermiteNavegacion}>No</button>
                    </div>
                </div> 
            </Modal> */}
        </>
    )

}
export default Ubicacion