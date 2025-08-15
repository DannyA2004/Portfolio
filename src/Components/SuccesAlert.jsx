import React, { useState } from 'react'
import ReactDOM from "react-dom";
export const SuccesAlert = ({onClose}) => {
    const [visible, setVisible] = useState(true);
    
    const handleClose = () =>{
        setVisible(false)
        if (onClose){
            onClose()
        }
    };

    if (!visible){
        return null
    }

  return ReactDOM.createPortal(
    <div className="overlay">
        <div className='alert-div'>
            <span className='alert-message'>Correo enviado correctamente</span>
            <button className= "close-button" onClick={handleClose}>Continue</button>
        </div>
    </div>,
    document.body
  )
}
