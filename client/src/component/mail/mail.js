import React from 'react'
import './mail.css'

const Mail = () => {
  return (
    <div className='mail_contain'>
        <h1 className='mail_title1'>Save time,save money</h1>
        <h2 className='mail_desc '>Sign to get best deal</h2>
        <div className='mail_input'>
            <input type="text" placeholder='Enter your email'/>
            <button>Subcribe</button>
        </div>
    </div>
  )
}

export default Mail