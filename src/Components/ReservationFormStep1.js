import React, {useContext} from "react"
import { multiStepContext } from "./ReservationsContext";
import '../styles.scss';

export default function ReservationFormStep1() {
    const { setStep, formData, setFormData } = useContext(multiStepContext);

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
                    <select className="selectdiv" defaultValue="Today">
                        <option value="Today">Today</option>
                        <option value="Tomorrow">Tomorrow</option>
                    </select>
                    <div className="Select-Icon-Contaier">
                        <img src="./Form-Image-Content/Dropdown-Chevron.svg"/>
                    </div>
                </label>
                <label>
                    <span>*</span> Arival Time
                    <select className="selectdiv" defaultValue="18:00">
                        <option value="17:00">17:00</option>
                        <option value="17:30">17:30</option>
                        <option value="18:00" selected>18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                    </select>
                    <div className="Select-Icon-Contaier">
                        <img src="./Form-Image-Content/Dropdown-Chevron.svg"/>
                    </div>
                </label>
                <label>
                    <span>*</span> Number of guest
                    <select className="selectdiv" defaultValue="2">
                        <option value="1">1</option>
                        <option value="2" selected>2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10+">More than 10? - Pleace specify how many and your occation in the comment field</option>
                    </select>
                    <div className="Select-Icon-Contaier">
                        <img src="./Form-Image-Content/Dropdown-Chevron.svg"/>
                    </div>
                </label>
                <label>
                    <span>*</span> Occation
                    <select className="selectdiv" defaultValue="Dinner">
                        <option value="Dinner">Ordinary dinner at Little Lemon</option>
                        <option value="birthday">Birthday Celebrations s</option>
                        <option value="family">Family Gatherings</option>
                        <option value="business">Business Meetings</option>
                        <option value="anniversary">Anniversary Dinners</option>
                        <option value="themeParty">Themed Parties</option>
                        <option value="wineTasting">Wine Tasting Events</option>
                        <option value="cookingClass">Cooking Classes</option>
                        <option value="culturalEvent">Cultural Events</option>
                    </select>
                    <div className="Select-Icon-Contaier">
                        <img src="./Form-Image-Content/Dropdown-Chevron.svg"/>
                    </div>
                </label>
                <label>
                    {"Comment (Optional)"}
                    <input placeholder="Add a specific request"></input>
                </label>
            </div>

            <div id="Reservation-Form-Buttons-Container">
                <span></span>
                <button className="Next" onClick={() => setStep(2)}> Next </button>
            </div>
        </form>
    );
};