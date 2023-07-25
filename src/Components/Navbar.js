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
                    <a href='/About'>About</a>
                </li>
                <li>
                    <a href=''>Menu</a>
                </li>
                <li>
                    <a href='/Reservations'>Reservations</a>
                </li>
                <li>
                    <a href=''>Order Online</a>
                </li>
                <li>
                    <a href=''>Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar