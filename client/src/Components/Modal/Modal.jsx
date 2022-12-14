import './Modal.scss';
import React from 'react'

export default function Modal({ children, modal, setModal }) {

    const handleModal = () => { // handle modal view ~~~~~~~~~
        setModal(prev => !prev)
    }

    return (
        <div className={modal ? 'Modal active' : 'Modal'}>
            <div className={modal ? 'Modal__wrapper active' : 'Modal__wrapper'}></div>
            <div className={modal ? 'Modal__content' : 'Modal__content inActive'}>
                <div onClick={handleModal} className="close">
                    <span></span>
                    <span></span>
                </div>
                <h3>{children}</h3>
            </div>
        </div>
    )
}
