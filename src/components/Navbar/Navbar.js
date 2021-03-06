import React from 'react';
import {Link} from 'react-router-dom'
import {FaHandsHelping, FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';


import './Navbar.css';
function Navbar (){
    return(
        <>
            <nav className="nav-bar">
                <Link to="/">
                    <div className="logo">
                        <FaHandsHelping  size={30}/>  
                        <p>Todos Juntos</p>
                    </div>
                </Link>

            
                <div>
                    <FaInstagram className="social-icon" size={25}/>
                    <FaFacebook className="social-icon" size={25}/>
                </div>
            </nav>
        </>
    )
}
export default Navbar;