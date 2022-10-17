import React from "react";
import Logo from '../Images/bank.ico';
import {NavLink} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import ListStyle from '../Css/ListStyle.css'
const List=()=>{
    return(
        <>
        <header>
            <div className="container container-flex">
                <div className="logoContainer">
                <img src={Logo} alt ="Logo" className="Logo"/>
             </div>
             <nav>
                 <div className="List">
                    <NavLink exact to="/" className="listItem" activeClassName="activeItem">Home</NavLink>
                    <NavLink to="/about" className="listItem" activeClassName="activeItem">About</NavLink>
                    <NavLink to="/services" className="listItem" activeClassName="activeItem">Services</NavLink>
                    <NavLink to="/Contact" className="listItem" activeClassName="activeItem">Contact</NavLink>
                    <NavLink to="/policy" className="listItem" activeClassName="activeItem">Policy</NavLink>
                 </div>
             </nav>
             <div className="icons">
                 <SearchIcon className="Icon"/>
                 <PersonIcon className="Icon"/>
                 <PhoneIcon className="Icon"/>
             </div>
            </div>
        </header>
        </>
    )
}

export default List