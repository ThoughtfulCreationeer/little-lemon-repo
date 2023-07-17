import React from "react"
import './styles.scss';

function Navbar (){
    return(
        <nav>
            <a href="home">
            <img src="/logo-n-text.png" alt="Little Lomon's logo"/>
            </a>
            <ul>
            <li>
                <a href=''>Home</a>
            </li>
            <li>
                <a href=''>About</a>
            </li>
            <li>
                <a href=''>Menu</a>
            </li>
            <li>
                <a href=''>Reservations</a>
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