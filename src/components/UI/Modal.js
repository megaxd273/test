import ReactDOM from 'react-dom';
import React from 'react';
import './Modal.css';

function BackDrop(props) {
  return <div className="backdrop" onClick={props.blur}></div>;
}

function ModalWindow(props) {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
}
const portalEl = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop blur={props.hide} />, portalEl)}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalEl
      )}
    </React.Fragment>
  );
};

export default Modal;
