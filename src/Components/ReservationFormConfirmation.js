import React, {useContext} from "react"
import { multiStepContext } from "./ReservationsContext";
import '../styles.scss';

// const test () => {
//     console
// }

export default function ReservationFormConfirmation() {
    const { setStep, formData, setFormData } = useContext(multiStepContext);
    // const handleSubmitStepOne = (e) => {
    //     e.preventdefault();
    //     handleNext();
    // };

    return(
        <div id="Reservations-Form">
            <div id="Reservations-Step-Header">
                <h3>Find a table for any occation in...</h3>
                <p>Confirmation</p>
            </div>

            <button onClick={() => setStep(2)}> Previous </button>
            <button onClick={() => setStep(4)}> Next </button>
        </div>
    );
};
