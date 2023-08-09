import React, {useContext} from "react"
import { multiStepContext } from "./ReservationsContext";
import ReservationForm from "./ReservationForm";
import '../styles.scss';

export default function ReservationFormStep2() {
    const { setStep, reservationFormData, setReservationFormData } = useContext(multiStepContext);
    
    const isChecked = (value) => value === reservationFormData["Seating"];

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
                Choose Seating
                <div className="Seating-Container">
                    <label className="Seating-Selection-Card">
                        <div>
                            <h4>The Terrace</h4>
                            <p>16 seats left</p>
                            <input
                                type="radio"
                                name="seatingOption"
                                id="Seating-Option"
                                value='The Terrace'
                                checked ={isChecked("The Terrace")}
                                onChange={(e) => setReservationFormData({...reservationFormData, "Seating" : e.target.value})}
                            />
                        </div>
                        <img src="./Form-Image-Content/Terrace.jpg"/>
                    </label>
                    <label className="Seating-Selection-Card">
                        <div>
                            <h4>The Lounge</h4>
                            <p>16 seats left</p>
                            <input
                                type="radio"
                                name="seatingOption"
                                id="Seating-Option"
                                value="The Lounge"
                                checked ={isChecked("The Lounge")}
                                onChange={(e) => setReservationFormData({...reservationFormData, "Seating" : e.target.value})}
                            />
                        </div>
                        <img src="./Form-Image-Content/Lounge.jpg"/>
                    </label>
                    <label className="Seating-Selection-Card">
                        <div>
                            <h4>Waiters Choice</h4>
                            <input
                                type="radio"
                                name="seatingOption"
                                id="Seating-Option"
                                value="Waiters Choice"
                                checked={isChecked("Waiters Choice")}
                                onChange={(e) => setReservationFormData({...reservationFormData, "Seating" : e.target.value})}
                            />
                        </div>
                    </label>
                </div>
            </div>

            <div id="Reservation-Form-Buttons-Container">
                <button onClick={() => setStep(1)}> Previous </button>
                <button className="Next" onClick={() => setStep(3)}> Next </button>
            </div>
        </form>
    );
};