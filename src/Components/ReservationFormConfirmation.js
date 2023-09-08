import React, {useContext} from "react"
import { multiStepContext } from "./ReservationsContext";
import '../styles.scss';


export default function ReservationFormConfirmation() {
    const { setStep, formData, setFormData } = useContext(multiStepContext);
    // const handleSubmitStepOne = (e) => {
    //     e.preventdefault();
    //     handleNext();
    // };

    return(
        <div className="Reservations-Confirmation-Page">
            <img src="./Footer-Content/little-lemon-TM.png" alt="The Little Lemon Resturant Logo Trademark"/>
            <div className="Dear-Guest">
                <h3>We are looking forward to serving you and your guests</h3>
            </div>
            <div>
                <p>18-06-2023 at 18:00 - Current Spaceholder</p>
                <p>2 persons - Current Spaceholder</p>
                <p>In the lounge - Current Spaceholder</p>
                <p>{"[Specific request] - Current Spaceholder"}</p>
            </div>
            <div id="Reservation-Form-Buttons-Container">
                <button onClick={() => setStep(3)}> Change Reservation </button>
                <button className="Cancel-Reservation" onClick={() => setStep(4)}> Cancel Reservation </button>
            </div>
        </div>
    );
};
