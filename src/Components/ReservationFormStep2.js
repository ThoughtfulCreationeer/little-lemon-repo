import React from "react"
import '../styles.scss';

function ReservationFormStep2 (formData, setFormData, handlePrevious, handleNext){
    return(
        <div id="Reservations-Form">
            <div id="Reservations-Step-Header">
                <h3>Find a table for any occation in...</h3>
                <p>Step2</p>
            </div>

            <button onClick={handlePrevious}> Previous </button>
            <button onClick={handleNext}> Next </button>
        </div>
    );
};

export default ReservationFormStep2