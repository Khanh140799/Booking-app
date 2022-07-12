import Navbar from "../../component/navbar/navbar";
import React from "react";
import { } from "react-router-dom";
import HotelDetail from "../../component/hoteldetail/hoteldetail";
import Mail from "../../component/mail/mail";
import Footer from "../../component/footer/footer";

const Hotel = () =>{
    return(
        <div>
            <Navbar type="true"/>    
            <HotelDetail/> 
            <Mail/>
            <div className='list_contain_footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default Hotel;