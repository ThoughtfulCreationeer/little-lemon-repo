import React, {useState, useContext, useRef, useEffect} from "react"
import { multiStepContext } from "./ReservationsContext";
// import Modal from "./ReservationFormFinalSubmitionModal";
import '../styles.scss';

export default function ReservationFormStep3() {
    const { setStep, reservationFormData, setReservationFormData, submitData } = useContext(multiStepContext);
    const isChecked = (value) => value === true;
    
    // 1. Approch to finding making a confirmation pop-up window: https://medium.com/@dimterion/modals-with-html-dialog-element-in-javascript-and-react-fb23c885d62e
    // const [modal, setModal] = useState(false);

    // 2. Approch to making a confirmation pop-up window: https://codesandbox.io/s/react-native-html-dialog-pq84l6?file=/src/App.js
    // const ref =  useRef(null);
    // const [show, toggle] = useState(false);

    // useEffect(() => {
    //     if (!ref.current){
    //         return;
    //     }

    //     if (show) {
    //         ref.current.showModal();
    //     } else {
    //         ref.current.close();
    //     }
    // }, [ref, show]);

    return(
        <form id="Reservations-Form">
            <div id="Reservations-Step-Header">
                <h3>Fill out the form and reserve a table for any occation in...</h3>
                <div className="Reservations-Form-Progress-Line">
                    <img src="./Form-Step-Numbers/Checkmark.svg" />
                    <span id="White-Line"></span>
                    <img src="./Form-Step-Numbers/Checkmark.svg" />
                    <span id="White-Line"></span>
                    <img src="./Form-Step-Numbers/Step3-Filled.svg" />
                </div>
            </div>

            <div id="Reservation-Inputfields-Container">
                <label>
                    <span>*</span> First Name
                    <input
                        placeholder="Write your first name here"
                        value={reservationFormData['First name']}
                        onChange={(e) => setReservationFormData({...reservationFormData, 'First name' : e.target.value})}>
                    </input>
                </label>
                <label>
                    <span>*</span> Last Name
                    <input
                        placeholder="Write your last name here"
                        value={reservationFormData['Last name']}
                        onChange={(e) => setReservationFormData({...reservationFormData, 'Last name' : e.target.value})}>
                    </input>
                </label>
                <label>
                    <span>*</span> Phone Number
                    <input
                        placeholder="Write your phone number here"
                        value={reservationFormData['Phone number']}
                        onChange={(e) => setReservationFormData({...reservationFormData, 'Phone number' : e.target.value})}>
                    </input>
                </label>
                <label>
                    {"Email (Optional)"}
                    <input
                        type="email"
                        placeholder="Add a specific request"
                        value={reservationFormData['Email']}
                        onChange={(e) => setReservationFormData({...reservationFormData, 'Email' : e.target.value})}>
                    </input>
                </label>
                <label className="checkbox">
                    <input
                        type="checkbox"
                        id="checkbox"
                        value={true}
                        onChange={(e) => setReservationFormData({...reservationFormData, 'Agreeing sms-receipt' : e.target.value})}
                        checked={isChecked(reservationFormData['Agreeing sms-receipt'])}
                    />
                    <span className="custom-checkbox"></span>
                    I would like to receive the receipt on email after my dinner
                </label>
                <label className="checkbox">
                    <input
                        type="checkbox"
                        id="checkbox"
                        value={true}
                        onChange={(e) => setReservationFormData({...reservationFormData, 'Agreeing newsletter' : e.target.value})}
                        checked={isChecked(reservationFormData['Agreeing newsletter'])}
                    />
                    <span className="custom-checkbox"></span>
                    I would like to receive the email newsletter
                </label>
                <div className="TCE">
                    <div className="Terms-n-conditions">
                        <p>Will be used in accordance with our</p> <a>terms and conditions</a>
                    </div>
                    {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
                </div>
            </div>

            <div id="Reservation-Form-Buttons-Container">
                <button onClick={() => setStep(2)}> Previous </button>
                <button className="Next" onClick={submitData}> Finalize Booking </button>
                

                {/* Open componenten ReservationFromConfirmation */}
                {/* <button className="Next" onClick={() => setModal(true)}> Finalize Booking </button> */}
                
                {/* Open dilogen specifiseret i functionen i begyndelsen af dette skript */}
                {/* <button onClick={() => toggle(!show)}>Open</button> */}
            </div>
            {/* <Modal openModal={modal} closeModal={() => setModal(false)} /> */}
            
            {/* <dialog
                ref={ref}
                onClick={(e) => {
                const dialogDimensions = ref.current.getBoundingClientRect();
                if (
                    e.clientX < dialogDimensions.left ||
                    e.clientX > dialogDimensions.right ||
                    e.clientY < dialogDimensions.top ||
                    e.clientY > dialogDimensions.bottom
                ) {
                    ref.current.close();
                }
                }}
            >
                <h1>Test</h1>
            </dialog> */}
        </form>
    );
};