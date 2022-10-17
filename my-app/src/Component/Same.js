import React from "react";
import {NavLink} from 'react-router-dom';
import logoHome from '../Images/bank.png';
const Same=()=>{
    return(
        <>
        <div className="mainSection">
            <div className="contentBox">
                <h1>EMI BANK</h1>
                <p> La plateforme EMI BANK est une plateforme banquaire qui permet une meilleur flexibilité</p>
                <p> try it ...</p>
                <div className="btnBox">
                    <div className="btn">
                    <NavLink to="/about" className="readMore" >Read more</NavLink>
                    </div>
                </div>
            </div>
        <div className="imageContainer">
        <img src={logoHome} alt ="home"/>
        </div>
        </div>
        </>
    )
}

export default Same