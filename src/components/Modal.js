import React from 'react';
import ReactDOM from 'react-dom';
// Modal general
import './styles/Modal.css';

function Modal(props) {
  // mostrar o no el modal
  if (!props.isOpen) {
    return null;
  }
// portal para usar id modal declarado fuera de id app <toda la app>
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          X
        </button>
        {/* props para componente generico */}
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;