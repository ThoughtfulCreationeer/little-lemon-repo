import React from "react"
import '../styles.scss';

function ReservationFormStep3 (formData, setFormData, handlePrevious){
    return(
        <div id="Reservations-Form">
            <div id="Reservations-Step-Header">
                <h3>Find a table for any occation in...</h3>
                <p>Step3</p>
            </div>

            <button onClick={handlePrevious}> Previous </button>
            {/* <button onClick={handleNext}> Next </button> */}
        </div>
    );
};

export default ReservationFormStep3