import React from "react";
import './styles.scss';
import NewsletterSignUp from './Components/NewsletterSignUp.js';

function Footer(){
    return(
        <footer>
            <div className="Logo-n-subscriptionform">
                <img src="./Footer-Content/little-lemon-TM.png" alt="The Little Lemon Resturant Logo Trademark"/>
                <NewsletterSignUp />
            </div>
            <div className="Nav-n-Contact">
                <ul className="Footer-Navigation">
                    <li><a href="">Contact</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Reservation</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Home</a></li>
                </ul>
                <ul className="Footer-Contact-Info">
                    <li><a href="tel:+3125550123">Phone Number: (312) 555-0123</a></li>
                    <li><a href="mailto:contact@littlelemonchicago.com">Email: contact@littlelemonchicago.com</a></li>
                </ul>
            </div>
            <div className="SoMe-Container">
                <a href="https://www.instagram.com/" target="_blank"><img src="./Footer-Content/Insta.svg"/></a>
                <a href="https://www.threads.net/" target="_blank"><img src="./Footer-Content/Thread.svg"/></a>
                <a href="https://www.facebook.com/" target="_blank"><img src="./Footer-Content/FaceBook.svg"/></a>
                <a href="https://twitter.com/" target="_blank"><img src="./Footer-Content/Twitter.svg"/></a>
            </div>
            <div className="Powered-by-container">
                <p>Powered by</p>
                <a href="https://thoughtfulcreationeer.com/" target="_blank"><img src="./Footer-Content/TK-Signatur.png" /></a>
            </div>
        </footer>
    );
};

export default Footer