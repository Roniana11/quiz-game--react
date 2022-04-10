import React from 'react';

function Modal(props) {
  return <React.Fragment>
    <div className='modal'>{props.children}</div>
    <div className='backdrop' onClick={props.onConfirm}></div>
    </React.Fragment>;
}

export default Modal;
