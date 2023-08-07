import React, {useContext} from "react"
import { multiStepContext } from "./ReservationsContext";
import '../styles.scss';

export default function ReservationFormStep3() {
    const { setStep, reservationFormData, setReservationFormData } = useContext(multiStepContext);

    return(
        <form id="Reservations-Form">
            <div id="Reservations-Step-Header">
                <h3>Fill out the form and reserve a table for any occation in...</h3>
                <div className="Reservations-Form-Progress-Line">
                    <img src="./Form-Step-Numbers/Checkmark.svg" />
                    <span id="White-Line"></span>
                    <img src="./Form-Step-Numbers/Checkmark.svg" />
                    <span id="White-Line"></span>
                    <img src="./Form-Step-Numbers/Step3-Filled.svg" />
                </div>
            </div>

            <div id="Reservation-Inputfields-Container">
                <label>
                    <span>*</span> First Name
                    <input
                        placeholder="Write your first name here"
                        value={reservationFormData['First name']}
                        onChange={(e) => setReservationFormData({...reservationFormData, 'First name' : e.target.value})}>
                    </input>
                </label>
                <label>
                    <span>*</span> Last Name
                    <input
                        placeholder="Write your last name here"
                        value={reservationFormData['Last name']}
                        onChange={(e) => setReservationFormData({...reservationFormData, 'Last name' : e.target.value})}>
                    </input>
                </label>
                <label>
                    <span>*</span> Phone Number
                    <input
                        placeholder="Write your phone number here"
                        value={reservationFormData['Phone number']}
                        onChange={(e) => setReservationFormData({...reservationFormData, 'Phone number' : e.target.value})}>
                    </input>
                </label>
                <label>
                    {"Email (Optional)"}
                    <input
                        type="email"
                        placeholder="Add a specific request"
                        value={reservationFormData['Email']}
                        onChange={(e) => setReservationFormData({...reservationFormData, 'Email' : e.target.value})}>
                    </input>
                </label>
                <label className="checkbox">
                    <input
                        type="checkbox"
                        id="checkbox"
                    />
                    <span className="custom-checkbox"></span>
                    I would like to receive the receipt on email after my dinner
                </label>
                <label className="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <span className="custom-checkbox"></span>
                    I would like to receive the email newsletter
                </label>
                <div className="TCE">
                    <div className="Terms-n-conditions">
                        <p>Will be used in accordance with our</p> <a>terms and conditions</a>
                    </div>
                    {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
                </div>
            </div>

            <div id="Reservation-Form-Buttons-Container">
                <button onClick={() => setStep(2)}> Previous </button>
                <button className="Next" onClick={() => setStep(4)}> Finalize Booking </button>
            </div>
        </form>
    );
};