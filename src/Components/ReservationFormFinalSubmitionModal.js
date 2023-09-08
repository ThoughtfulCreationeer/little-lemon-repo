import { useRef, useEffect, useContext } from "react";
import { multiStepContext } from "./ReservationsContext";
import '../styles.scss';

export default function Modal({ openModal, closeModal,}) {
    const ref = useRef();

    useEffect (() =>{
        if (openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);

    return (
        <dialog
            ref={ref}
            onCancel={closeModal}
        >
            <h3>Is everything as you want it?</h3>
            <button > Change Booking </button>
        </dialog>
    );
};