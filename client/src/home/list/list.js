
import Navbar from '../../component/navbar/navbar';
import React from 'react';
import ListHotel from '../../component/listhotel/listhotel';
import Mail from '../../component/mail/mail';
import Footer from '../../component/footer/footer';

const List = () =>{
    return(
        <div>
            <Navbar type="true"/>
            <ListHotel/>
            <Mail/>
            <div className='list_contain_footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default List;