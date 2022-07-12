import React from 'react'
import Footer from '../../component/footer/footer'
import Mail from '../../component/mail/mail'
import Navbar from '../../component/navbar/navbar'
import Spin from '../../component/spin/spin'
import './homespin.css'

const HomeSpin = () => {
  return (
    <div>
        <Navbar type="true"/>
        <Spin/>
        <Mail/>
        <div className='mail_contain_footer'>
          <Footer/>
        </div>
    </div>
  )
}

export default HomeSpin