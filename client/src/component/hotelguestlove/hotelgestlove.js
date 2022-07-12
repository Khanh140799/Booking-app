import React from 'react'
import './hotelguestlove.css'
import useFetch from "../hooks/fetch"
import { Link } from 'react-router-dom'

const HotelGuestLove = () => {
    const {data,loading,error}=useFetch("http://localhost:3001/api/hotel?featured=true&limit=4")
  return (
    <div className='hotel_guest_love_conatain'>
        <div className='hotel_guest_love_title'>
            Hotel guested love
        </div>
        {loading?"Loading":
        <>
        <div className='hotel_guest_love_list'>
            {data.map((hotel,index)=>(
                <Link to={`/hotel/${hotel._id}`}>
                    <div className='hotel_guest_love_item' key={hotel._id}>
                        <img
                            className='hotel_guest_love_img'
                            alt="Hotel guested love"
                            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/259281659.jpg?k=91a6a37c5475cfdff4ac505b93913be08254613e82cd9fac43d064395a1a0015&o=&hp=1"
                        />  
                        <div className='hotel_guest_love_name'>
                            {hotel.name}
                        </div>
                        <div className='hotel_guest_love_city'>
                            {hotel.city}
                        </div>
                        <div className='hotel_guest_love_price'>
                            Starting {hotel.cheapestPrice}$
                        </div>
                        {hotel.rating&&
                        <>
                            <div className='hotel_guest_love_star'>
                            <div className='hotel_star'>
                                {hotel.rating}
                            </div>
                            <div className='hotel_rank'>
                                Excellent
                            </div>
                        </div>
                        </>
                        }
                    </div>
                </Link>
            ))}
        </div>
        </>}
    </div>
  )
}

export default HotelGuestLove