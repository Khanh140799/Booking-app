import React from 'react'
import './hotelsearch.css'
import { Link } from 'react-router-dom'

const HotelSearch = ({hotel}) => {
  return (
    <div className='hotel_search_item'>
        <img 
        src="https://pula.vn/storage/images/2021/11/20/giuong-ngu-go-cao-cap-pula-pb23.jpeg"
        alt='Beautifull Room'
        className='hotel_search_img'
        />
        <div className='hotel_search'>
            <div className='hotel_search_name'>
                {hotel.name}
            </div>
            <div className='hotel_search_distance'>
                {hotel.distance} to the center
            </div>
            <div className='hotel_search_move'>
                Free airport taxi
            </div>
            <ul className='hotel_search_property'>
                <li className='hotel_search_kind'>
                    Standard Room
                </li>
                <li className='hotel_search_area'>
                    21 m2
                </li>
                <li className='hotel_search_bed'>
                    2 bed
                </li>
            </ul>
            <div className='hotel_search_ultil'>
                Free paking and free wifi
            </div>
            <div className='hotel_search_title'>
                You can cancel later, so lock in this great price today!
            </div>
        </div>
        <div className='hotel_search_detail'>
            {hotel.rating&&
            <div className='hotel_search_star'>
                <div className='hotel_search_star_text'>
                    Excellent
                </div>
                <div className='hotel_search_star_star'>
                    {hotel.rating}
                </div>
            </div>}
            <div className='hotel_search_book'>
                <div className='hotel_search_price'>
                    {hotel.cheapestPrice}
                </div>
                <div className='hotel_search_price_include'>
                    Include taxes and fees
                </div>
                <Link to={`/hotel/${hotel._id}`}>
                    <button className='hotel_search_book_btn'>
                        See Availability
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HotelSearch