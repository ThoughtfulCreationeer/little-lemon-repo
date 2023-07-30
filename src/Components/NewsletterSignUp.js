import React, { useState } from "react";
import '../styles.scss';

function NewsletterSignUp(){
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState ("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isChecked && email.trim() !== ''){
            console.log('Form submitted:', email);
            setEmail('');
            setIsChecked(false);
            setErrorMessage("");
        } else {
            setErrorMessage("*You must agree to recieve the newsletter");
        }
    };

    return(
        <form className="News-Letter-Sign-Up-Form" onSubmit={handleSubmit}>
            <label className="Subscription-label" htmlFor="email">Subscribe to our newsletter</label>
            <div>
                <input type="email" id="email" placeholder="Enter your email" value={email} onChange= {(e) => setEmail(e.target.value)} />
                <button type="submit">Submit</button>
            </div>
            <label className="checkbox" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                <span class="custom-checkbox"></span>
                I agree to recieve the newsletter.
            </label>
            <div className="TCE">
                <div className="Terms-n-conditions">
                    <p>Will be used in accordance with our</p> <a>terms and conditions</a>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </form>
    )
}

export default NewsletterSignUp;


