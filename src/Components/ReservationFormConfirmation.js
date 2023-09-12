import React, {useContext} from "react"
import { multiStepContext } from "./ReservationsContext";
import '../styles.scss';


export default function ReservationFormConfirmation() {
    const { finalData, startOver } = useContext(multiStepContext);
    // const handleSubmitStepOne = (e) => {
    //     e.preventdefault();
    //     handleNext();
    // };

    return(
        <div className="Reservations-Confirmation-Page">
            <img src="./Footer-Content/little-lemon-TM.png" alt="The Little Lemon Resturant Logo Trademark"/>
            <div className="Dear-Guest">
                <h3>Dear {finalData[0]["First name"]} {finalData[0]["Last name"]}</h3>
                <h3>We are looking forward to serving you and your guests on your visit</h3>
            </div>
            <div className="Booking-Details-Container">
                <div className="Booking-Information"> <p><strong>Time</strong></p> <p>{finalData[0]["Date"]} at {finalData[0]["Arrival time"]}</p> </div>
                <div className="Booking-Information"> <p><strong>Seating</strong></p> <p>{finalData[0]["Seating"]}</p> </div>
                <div className="Booking-Information"> <p><strong>Number of guests</strong></p> <p>{finalData[0]["Number of guests"]}</p> </div>
                <div className="Booking-Information"> <p><strong>Occation</strong></p> <p>{finalData[0]["Occation"]}</p> </div>
                <div className="Booking-Comment-Container">
                    <p><strong>Comment</strong></p>
                    <div className="Booking-Comment"> <p>{finalData[0]["Comment"]}</p> </div>
                </div>
            </div>
            <div id="Reservation-Form-Buttons-Container">
               <span></span> <button className="Cancel-Reservation" onClick={startOver}> Cancel Reservation </button> <span></span>
            </div>
        </div>
    );
};
