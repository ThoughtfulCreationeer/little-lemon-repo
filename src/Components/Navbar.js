import React from "react"
import '../styles.scss';

function Navbar (){
    return(
        <nav>
            <a href="/">
                <img src="/logo-n-text.png" alt="Little Lomon's logo"/>
            </a>
            <ul>
                <li>
                    <a href='/Menu'>Menu</a>
                </li>
                <li>
                    <a href='/Reservations'>Reservations</a>
                </li>
                <li>
                    <a href='/About'>About</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar