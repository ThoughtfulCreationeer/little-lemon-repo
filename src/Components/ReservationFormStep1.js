import React, {useState, useEffect, useContext} from "react"
import { multiStepContext } from "./ReservationsContext";
import { fetchAPI } from "./AvailableHoursAPI";
import '../styles.scss';

export default function ReservationFormStep1() {
    const { setStep, reservationFormData, setReservationFormData } = useContext(multiStepContext);
    const [availableTimes, setAvailableTimes] = useState([]);
    const getApiDateFormat = (dateSelection) => {
        // Create a new Date object for the current date.
        const today = new Date();
        
        // If the user has selected "Tomorrow", add one day to the current date.
        if (dateSelection === "Tomorrow") {
            today.setDate(today.getDate() + 1);
        }
        
        // Convert the date object to the format YYYY-MM-DD.
        return today.toISOString().split('T')[0];

    }
    

    useEffect(() => {
        async function fetchAvailableTimes() {
            try{
                const dateString = getApiDateFormat(reservationFormData["Date"]);
                const dateObj = new Date(dateString);
                const times = await fetchAPI(dateObj);
                setAvailableTimes(times);
            } catch(error){
                console.log("Error fetching times:", error);
            }
        }

        fetchAvailableTimes();

        if (!reservationFormData["Date"]) {
            setReservationFormData({...reservationFormData, "Date": "Today"});
        }

    }, [reservationFormData["Date"]]);

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

                {/* Note that the for attribute helps associate the label with the input/selector by having the same name as the id attribute */}
                <label for="Date">
                    <span>*</span> Date
                    <select
                        className="selectdiv"
                        id="Date"
                        value={reservationFormData["Date"]}
                        onChange={(e) => setReservationFormData({...reservationFormData, "Date" : e.target.value})}
                    >
                        <option>Today</option>
                        <option>Tomorrow</option>
                    </select>
                    <div className="Select-Icon-Contaier">
                        <img src="./Form-Image-Content/Dropdown-Chevron.svg"/>
                    </div>
                </label>

                <label for="Arival time">
                    <span>*</span> Arrival Time
                    <select
                        className="selectdiv"
                        id="Arival time"
                        value={reservationFormData["Arrival time"]}
                        onChange={(e) => setReservationFormData({...reservationFormData, "Arrival time" : e.target.value})}
                        >
                            {availableTimes.map((time) => (
                                <option key={time} value={time}> {time} </option>
                            ))}
                    </select>
                    <div className="Select-Icon-Contaier">
                        <img src="./Form-Image-Content/Dropdown-Chevron.svg"/>
                    </div>
                </label>

                <label for="NoG">
                    <span>*</span> Number of guests
                    <select
                        className="selectdiv"
                        id="NoG"
                        value={reservationFormData["Number of guests"]}
                        onChange={(e) => setReservationFormData({...reservationFormData, "Number of guests": e.target.value})}
                    >
                        <option>1</option>
                        <option>2</option>
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

                <label for="Occation">
                    <span>*</span> Occation
                    <select
                        className="selectdiv"
                        id="Occation"
                        value={reservationFormData["Occation"]}
                        onChange={(e) => setReservationFormData({...reservationFormData, "Occation" : e.target.value})}
                    >
                        <option value="Dinner">Ordinary dinner at Little Lemon</option>
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

                <label for="Comment">
                    {"Comment (Optional)"}
                    <input
                        id="Comment"
                        placeholder="Add a specific request"
                        value={reservationFormData["Comment"]}
                        onChange={(e) => setReservationFormData({...reservationFormData, "Comment" : e.target.value})}
                    ></input>
                </label>
            </div>

            <div id="Reservation-Form-Buttons-Container">
                <span></span>
                <button className="Next" id='Yellow-Button' onClick={() => setStep(2)}> Next </button>
            </div>
        </form>
    );
};