/* Modal recibe:
isOpen = estado inicial del modal (abierto o cerrado)
children = contenido del modal
*/
import React from "react";

import './Modal.css'

const Modal = ({ isOpen, closeModal, children }) => {
  const handleModalDialogClick = e => {
    e.stopPropagation();
  };

  return (
    <div
      className={`modal-react ${isOpen && "modal-react-open"}`}
      onClick={closeModal}
    >
      <div className="modal-react__dialog" onClick={handleModalDialogClick}>
        <div className="modal-react__dialog--children">{children}</div>
      </div>
    </div>
  );
};

export default Modal;