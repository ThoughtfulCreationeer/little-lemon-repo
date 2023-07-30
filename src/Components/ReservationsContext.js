import React, {createContext, useState} from "react";
import ReservationForm from "./ReservationForm";

export const multiStepContext = createContext();
    const ReservationsContext = () => {
        const [step, setStep] = useState(1);
        const [reservationFormData, setReservationFormData] = useState([]);
        const [finalData, setFinalData] = useState([]);

    return(
        <multiStepContext.Provider value={{step, setStep, reservationFormData, setReservationFormData, finalData, setFinalData}}>
            <ReservationForm />
        </multiStepContext.Provider>
    )};

export default ReservationsContext;

