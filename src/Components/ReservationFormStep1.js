import React, {useContext} from "react"
import { multiStepContext } from "./ReservationsContext";
import '../styles.scss';

export default function ReservationFormStep1() {
    const { setStep, reservationFormData, setReservationFormData } = useContext(multiStepContext);

    return(
        <form id="Reservations-Form">
            <div id="Reservations-Step-Header">
                <h3>Fill out the form and reserve a table for any occation in...</h3>
                <div className="Reservations-Form-Progress-Line">
                    <img src="./Form-Step-Numbers/Step1-Filled.svg" />
                    <span id="White-Line"></span>
                    <img src="./Form-Step-Numbers/Step2-NotFilled.svg" />
                    <span id="White-Line"></span>
                    <img src="./Form-Step-Numbers/Step3-NotFilled.svg" />
                </div>
            </div>

            <div id="Reservation-Inputfields-Container">
                <label>
                    <span>*</span> Date
                    <select
                        className="selectdiv"
                        value={reservationFormData["Date"]}
                        onChange={(e) => setReservationFormData({...reservationFormData, "Date" : e.target.value})}
                    >
                        <option selected >Today</option>
                        <option>Tomorrow</option>
                    </select>
                    <div className="Select-Icon-Contaier">
                        <img src="./Form-Image-Content/Dropdown-Chevron.svg"/>
                    </div>
                </label>
                <label>
                    <span>*</span> Arrival Time
                    <select
                        className="selectdiv"
                        value={reservationFormData["Arrival time"]}
                        onChange={(e) => setReservationFormData({...reservationFormData, "Arrival time" : e.target.value})}
                        >
                            <option>17:00</option>
                            <option>17:30</option>
                            <option selected>18:00</option>
                            <option>18:30</option>
                            <option>19:00</option>
                            <option>19:30</option>
                            <option>20:00</option>
                    </select>
                    <div className="Select-Icon-Contaier">
                        <img src="./Form-Image-Content/Dropdown-Chevron.svg"/>
                    </div>
                </label>
                <label>
                    <span>*</span> Number of guests
                    <select
                        className="selectdiv"
                        value={reservationFormData["Number of guests"]}
                        onChange={(e) => setReservationFormData({...reservationFormData, "Number of guests": e.target.value})}
                    >
                        <option>1</option>
                        <option selected>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option value="More than 10" >10 or more - Pleace specify how many and your occation in the comment field</option>
                    </select>
                    <div className="Select-Icon-Contaier">
                        <img src="./Form-Image-Content/Dropdown-Chevron.svg"/>
                    </div>
                </label>
                <label>
                    <span>*</span> Occation
                    <select
                        className="selectdiv"
                        value={reservationFormData["Occation"]}
                        onChange={(e) => setReservationFormData({...reservationFormData, "Occation" : e.target.value})}
                    >
                        <option value="Dinner" selected>Ordinary dinner at Little Lemon</option>
                        <option value="birthday">Birthday Celebration</option>
                        <option value="family">Family Gathering</option>
                        <option value="business">Business Meeting</option>
                        <option value="anniversary">Anniversary Dinner</option>
                        <option value="themeParty">Themed Party</option>
                        <option value="wineTasting">Wine Tasting</option>
                        <option value="cookingClass">Cooking Class</option>
                        <option value="culturalEvent">Cultural Event</option>
                    </select>
                    <div className="Select-Icon-Contaier">
                        <img src="./Form-Image-Content/Dropdown-Chevron.svg"/>
                    </div>
                </label>
                <label>
                    {"Comment (Optional)"}
                    <input
                        placeholder="Add a specific request"
                        value={reservationFormData["Comment"]}
                        onChange={(e) => setReservationFormData({...reservationFormData, "Comment" : e.target.value})}
                    ></input>
                </label>
            </div>

            <div id="Reservation-Form-Buttons-Container">
                <span></span>
                <button className="Next" onClick={() => setStep(2)}> Next </button>
            </div>
        </form>
    );
};