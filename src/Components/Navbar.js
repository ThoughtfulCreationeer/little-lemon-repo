import React from "react"
import '../styles.scss';
import { Link } from 'react-router-dom'

function Navbar (){
    return(
        <nav>
            <Link to="/">
                <img src="/logo-n-text.png" alt="Little Lomon's logo"/>
            </Link>
            <ul>
                <li>
                    <Link to='/Menu'>Menu</Link>
                </li>
                <li>
                    <Link to='/Reservations'>Reservations</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar