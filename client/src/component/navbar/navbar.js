import './navbar.css'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from '../../assets/img/z3296383029482_efcf259c434168eb55a6ba1fbbef4f3f.jpg'
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AttractionsIcon from '@mui/icons-material/Attractions';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import HotelIcon from '@mui/icons-material/Hotel';
import { Link } from 'react-router-dom';

const Navbar = ({type}) =>{
    return(
        <div className='navbar'>
            <div className="navbar_contain">
                <Link to="/" className="home">
                    <img src={Logo} alt="Logo" className="logo"/>
                    <span className="title">HLP to 29fQ</span>
                </Link>
                <div className="menu">
                    <a href={'https://google.com/'} className="menu_">Find A Property</a>
                    <a href={'https://www.facebook.com/'} className="menu_">Share Stories</a>
                    <a href={'https://www.facebook.com/'} className="menu_">Rental Guides</a>
                    <a href={'https://www.facebook.com/'} className="menu_">Download Mobile App</a>
                </div>
                <div className="user">
                    <button className="btn_host">Becom A Host</button>
                    <MenuIcon className="user_icon"/>
                    <AccountCircleIcon className="user_icon"/>
                </div>
            </div>
            <div className="header">
                <div className="header_stay">
                    <HotelIcon className="header_icon"/>
                    <span className="header_text">Stay</span>
                </div>
                <div className="header_flight">
                    <FlightIcon className="header_icon"/>
                    <span className="header_text">Flight</span>
                </div>
                <div className="header_car">
                    <DirectionsCarIcon className="header_icon"/>
                    <span className="header_text">Car</span>
                </div>
                <div className="header_attraction">
                    <AttractionsIcon className="header_icon"/>
                    <span className="header_text">Attraction</span>
                </div>
                <div className="header_taxi">
                    <LocalTaxiIcon className="header_icon"/>
                    <span className="header_text">Taxi</span>
                </div>
            </div>
            <div className={type==="true"?"true":"false"}>
            </div>
        </div>
    )
}
export default Navbar