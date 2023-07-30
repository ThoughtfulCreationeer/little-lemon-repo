import React, {useContext} from "react";
import { multiStepContext } from "./ReservationsContext";
import ReservationFormStep1 from "./ReservationFormStep1";
import ReservationFormStep2 from "./ReservationFormStep2";
import ReservationFormStep3 from "./ReservationFormStep3";
import ReservationFormConfirmation from "./ReservationFormConfirmation";

const ReservationForm = () => {
    const {step, finalData} = useContext(multiStepContext);

    const renderFormStep = (step) => {
        switch (step) {
            case 1:
                return <ReservationFormStep1  />;
            case 2:
                return <ReservationFormStep2  />;
            case 3:
                return <ReservationFormStep3  />;
            case 4:
                return <ReservationFormConfirmation />;
            default:
                return null;
        }
    }

    return(
        <div className="Reservations-Form-Content">
            {renderFormStep(step)}
        </div>
    );
};


export default ReservationForm;