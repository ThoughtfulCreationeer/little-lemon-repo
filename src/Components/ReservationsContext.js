import React, {createContext, useState} from "react";
import ReservationForm from "./ReservationForm";

export const multiStepContext = createContext();
    const ReservationsContext = () => {
        const [step, setStep] = useState(1);
        const [reservationFormData, setReservationFormData] = useState({
            "Date": "Today",
            "Arrival time": "18:00",
            "Number of guests": 2,
            "Occation": "Ordinary dinner at Little Lemon"
        });
        const [finalData, setFinalData] = useState([]);

        function submitData() {
            setFinalData(finalData => [...finalData, reservationFormData]);
            setReservationFormData("");
            setStep(4);
        }

    return(
        <multiStepContext.Provider 
            value={{
                step, 
                setStep, 
                reservationFormData, 
                setReservationFormData, 
                finalData, 
                setFinalData,
                submitData
            }}
        >
            <ReservationForm />
        </multiStepContext.Provider>
    )};

export default ReservationsContext;

