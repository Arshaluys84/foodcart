import React from 'react'
import ReactDOM from 'react-dom'
import s from './Modal.module.css'

const Backdrop =({hideCartHandler})=><div className={s.backdrop} onClick={hideCartHandler}/>

const ModalOverlay=({children})=><div className={s.modal}>{children} </div>
  
const portal = document.getElementById('overlays')

const Modal = ({children,hideCartHandler}) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop hideCartHandler={hideCartHandler}/>,portal)}
      {ReactDOM.createPortal(<ModalOverlay >{children}</ModalOverlay>,portal)}

    </div>
  )
}

export default Modal
