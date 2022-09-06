/* Modal recibe:
isOpen = estado inicial del modal (abierto o cerrado)
children = contenido del modal
*/
import React from "react";

import styles from './Modal.module.css'

const Modal = ({ isOpen, closeModal, children }) => {
  const handleModalDialogClick = e => {
    e.stopPropagation();
  };

  return (
    <div
      className={`${styles.modal_react} ${isOpen && styles.modal_react_open}`}
      onClick={closeModal}
    >
      <div className={styles.modal_react__dialog} onClick={handleModalDialogClick}>
        <div className={styles.modal_react__dialog__children}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;