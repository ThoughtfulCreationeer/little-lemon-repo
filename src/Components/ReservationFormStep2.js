import React, {useContext} from "react"
import { multiStepContext } from "./ReservationsContext";
import '../styles.scss';
import ReservationForm from "./ReservationForm";

export default function ReservationFormStep2() {
    const { setStep, reservationFormData, setReservationFormData } = useContext(multiStepContext);

    return(
        <form id="Reservations-Form">
            <div id="Reservations-Step-Header">
                <h3>Fill out the form and reserve a table for any occation in...</h3>
                <div className="Reservations-Form-Progress-Line">
                    <img src="./Form-Step-Numbers/Checkmark.svg" />
                    <span id="White-Line"></span>
                    <img src="./Form-Step-Numbers/Step2-Filled.svg" />
                    <span id="White-Line"></span>
                    <img src="./Form-Step-Numbers/Step3-NotFilled.svg" />
                </div>
            </div>

            <div id="Reservation-Inputfields-Container">
                <div>
                    Choose Seating
                    <div className="Seating-Container">
                        <div className="Seating-Selection-Card">
                            <img src="./Form-Image-Content/Terrace.jpg"/>
                            <div>
                                <h4>The Terrace</h4>
                            <label>
                                <input type="radio" name="seatingOption" id="Seating-Option" value={reservationFormData["The Terrace"]} onChange={(e) => setReservationFormData({...reservationFormData, "Seating" : e.target.value})}/>
                                <span class="custom-checkbox"></span>
                                Select
                            </label>
                            </div>
                        </div>
                        <div className="Seating-Selection-Card">
                            <img src="./Form-Image-Content/Lounge.jpg"/>
                            <div>
                                <h4>The Lounge</h4>
                            <label>
                                <input type="radio" name="seatingOption" id="Seating-Option" value={reservationFormData["The Lounge"]} onChange={(e) => setReservationFormData({...reservationFormData, "Seating" : e.target.value})} />
                                <span class="custom-checkbox"></span>
                                Select
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="Reservation-Form-Buttons-Container">
                <button onClick={() => setStep(1)}> Previous </button>
                <button className="Next" onClick={() => setStep(3)}> Next </button>
            </div>
        </form>
    );
};