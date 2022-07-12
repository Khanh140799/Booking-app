import './listhotel.css'
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import format from 'date-fns/format';
import { DateRange } from 'react-date-range';
import HotelSearch from '../hotelsearch/hotelsearch';
import useFetch from '../hooks/fetch'

const ListHotel=()=>{
    const location=useLocation();
    const [destination,setDestination]=useState(location.state.destination)
    const [date,setDate] = useState(location.state.date)
    const [option,setOption] =useState(location.state.option)
    const [openDate,setOpenDate]=useState(false)
    const [max,setMax]=useState(999)
    const [min,setMin]=useState(1)
    const handleOpenDate=()=>{
        setOpenDate(!openDate)
    }
    const handleSearchHotel=()=>{
        reFetch()
    }
    const {data,loading,error,reFetch}=useFetch(`http://localhost:3001/api/hotel?city=${destination}&min=${min}&max=${max}`)
    return(
        <div className="list_hotel_contain">
            <div className='list_hotel_wrapper'>
                <div className='list_hotel_search'>
                    <h1 className='list_hotel_search_title'>Search</h1>
                    <div className='list_hotel_search_item'>
                        <label className='list_hotel_search_destination'>Destination</label>
                        <input
                        placeholder={destination}
                        className='list_hotel_search_input'
                        onChange={e=>setDestination(e.target.value)}
                        type="text"
                        />
                    </div>
                    <div className='list_hotel_search_item'>
                        <label className='list_hotel_search_destination'>Date   </label>
                        <input
                        placeholder={`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
                        className='list_hotel_search_input'
                        type="text"
                        onClick={handleOpenDate}
                        value={`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
                        />
                        {openDate&&
                        <DateRange
                            className="list_hotel_calendar"
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                        />}
                    </div>
                    <div className='list_hotel_option'>
                        <div className='list_hotel_option_title'>
                            Option
                        </div>
                        <div className='list_hotel_option_item'>
                            <div className='list_hotel_option_item_text'>Min Price</div>
                            <input
                            onChange={e=>setMin(e.target.value)}
                            className='list_hotel_option_item_input'
                            type="number"></input>
                        </div>
                        <div className='list_hotel_option_item'>
                            <div className='list_hotel_option_item_text'>Max Price</div>
                            <input 
                            className='list_hotel_option_item_input'
                            onChange={e=>setMax(e.target.value)}
                            type="number"></input>
                        </div>
                        <div className='list_hotel_option_item'>
                            <div className='list_hotel_option_item_text'>Adult</div>
                            <input className='list_hotel_option_item_input'
                            type="number"
                            placeholder={option.adult}
                            min={1}></input>
                        </div>
                        <div className='list_hotel_option_item'>
                            <div className='list_hotel_option_item_text'>Children</div>
                            <input className='list_hotel_option_item_input'
                            type="number"
                            placeholder={option.children}
                            min={0}></input>
                        </div>
                        <div className='list_hotel_option_item'>
                            <div className='list_hotel_option_item_text'>Room</div>
                            <input className='list_hotel_option_item_input'
                            onChange={e=>setOption({
                                ...option.adult,
                                ...option.children,
                                room:e.target.value
                            })}
                            type="number"
                            placeholder={option.room}
                            min={1}></input>
                        </div>
                    </div>
                    <button 
                    onClick={handleSearchHotel}
                    className='list_hotel_btn'>
                        Search     
                    </button>
                </div>
                <div className='list_hotel_result'>
                    {loading?"Loading":
                    <>
                        {data.map((hotel)=>(
                            <HotelSearch 
                            hotel={hotel}
                            key={hotel._id} />
                        ))}
                    </>}
                </div>
            </div>
        </div>
    )
}

export default ListHotel;