import './homepage.css'
import Navbar from "../../component/navbar/navbar";
import React from "react";
import Header from "../../component/header/header";
import FeatureHotel from "../../component/feature/featurehotel";
import ListProperty from '../../component/listproperty/listproperty';
import HotelGuestLove from '../../component/hotelguestlove/hotelgestlove';
import Mail from '../../component/mail/mail';
import Footer from '../../component/footer/footer';

const Homepage = () =>{
    return(
        <div classname="home_contain">
            <Navbar/>
            <Header/>
            <div className='home_page_contain'>
                <FeatureHotel/>
                <ListProperty/>
                <HotelGuestLove/>
                <Mail/>
                <Footer/>
            </div>
        </div>
    )
}

export default Homepage;