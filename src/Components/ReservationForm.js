import React, {useState} from "react";
import ReservationFormStep1 from "./ReservationFormStep1";
import ReservationFormStep2 from "./ReservationFormStep2";
import ReservationFormStep3 from "./ReservationFormStep3";
import ReservationFormConfirmationPage from "./ReservationFormConfirmationPage";

const ReservationForm = () => {
    const [step, setStep] = useState(1);
    const [reservationFormData, setReservationFormData] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
        comment: "",
        seating: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        receiveReceipt: false,
        receiveNewsletter: false,
    });

    const handlePrevious = () =>{
        setStep((prevStep) => prevStep-1);
    }

    const handleNext = () =>{
        if (step < 5){
            setStep((prevStep) => prevStep+1);
        } else {
            setStep(0);
        }
    }

    // const handleSubmit = (/*data*/ e) => {
    //     e.preventDefault();
    //     console.log("Form submittet:", reservationFormData)
    //     //setReservationFormData((prevData) => ({ ...prevData, ...data}));
    // };

    const renderFormStep = () => {
        switch (step) {
            case 1:
                return <ReservationFormStep1 reservationFormData={reservationFormData} setReservationFormData={setReservationFormData}/>;
            case 2:
                return <ReservationFormStep2 reservationFormData={reservationFormData} setReservationFormData={setReservationFormData}/>;
            case 3:
                return <ReservationFormStep3 reservationFormData={reservationFormData} setReservationFormData={setReservationFormData}/>;
            case 4:
                return <ReservationFormConfirmationPage reservationFormData={reservationFormData} setReservationFormData={setReservationFormData}/>;
            default:
                return null;
        }
    }

    return(
        <div className="Reservations-Form-Content">
            {renderFormStep()}
        </div>
    );
};


export default ReservationForm