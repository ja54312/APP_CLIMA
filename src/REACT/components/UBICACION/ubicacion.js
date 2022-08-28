//LIBRERIAS
import React, { useState } from 'react'
//HOOKS
import useModal from '../../hooks/useModal';
//COMPONENTES
import Modal from '../../elements/modal/Modal';
import data from '../../helpers/example'
//ESTILOS
import './ubicacion.css'

const Ubicacion = () => {

    const [isOpenModal, openModal, closeModal] = useModal(false);
    const [latitude,setLatitude] = useState();
    const [longitude,setLongitude] = useState();
    console.log(data,'data')

    const PermiteNavegacion = () => {
        if(!!navigator.geolocation){
                         console.log('si permite')
                         navigator.geolocation.getCurrentPosition(
                            function(position) {
                                //console.log(position)
                                setLatitude(position.coords.latitude)
                                setLongitude(position.coords.longitude)
                                //console.log(position.coords.latitude,latitude)
                                //console.log(position.coords.longitude,longitude)
                            }
                         )
                     }else{
                         console.log('no permite')
                     }
    }

    const NoPermiteNavegacion = () => {
        console.log('no permite')
    }

    return(
        <>
            <div className='container-ubicacion'>
                <div>Permisos para ubicacion</div>
                <button id='pedirvan' onClick={openModal}>Permisos</button>
                <div>por navegador</div>
            </div>
            <Modal isOpen={isOpenModal} closeModal={closeModal}> 
                <div className='header-modal-ubicacion'>
                        <div
                            className="modal-react__dialog--button-close"
                            onClick={closeModal}
                        >
                            x
                        </div>
                </div>
                <div className='container-modal-ubicacion'>
                    <p className='text-modal-ubicacion'>Desea permitir la ubicación en su dispositivo?</p>
                    <div className='container-botones-ubicacion'>
                        <button className='boton-ubicacion Si' onClick={PermiteNavegacion}>Si</button>
                        <button className='boton-ubicacion No' onClick={NoPermiteNavegacion}>No</button>
                    </div>
                </div> 
            </Modal>
        </>
    )

}
export default Ubicacion