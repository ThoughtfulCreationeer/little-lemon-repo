import React, {createContext, useState} from "react";
import ReservationForm from "./ReservationForm";

export const multiStepContext = createContext();
    const ReservationsContext = () => {
        const [step, setStep] = useState(1);
        const [reservationFormData, setReservationFormData] = useState({
            "Date": "<Select date>",
            "Arrival time": "<Select arrival time>",
            "Number of guests": "<Select number of guests>",
            "Occation": "<Select occation>"
        });
        const [finalData, setFinalData] = useState([]);

        function submitData() {
            setFinalData(finalData => [...finalData, reservationFormData]);
            setStep(4);
        }

        function startOver() {
            setFinalData("");
            setReservationFormData({
                "Date": "<Select date>",
                "Arrival time": "<Select arrival time>",
                "Number of guests": "<Select number of guests>",
                "Occation": "<Select occation>"
            });
            setStep(1);
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
                submitData,
                startOver
            }}
        >
            <ReservationForm />
        </multiStepContext.Provider>
    )};

export default ReservationsContext;

