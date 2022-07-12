import "./header.css"
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import HotelIcon from '@mui/icons-material/Hotel';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BoyIcon from '@mui/icons-material/Boy';
import {useState} from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import { HotelSearchContext } from "../usecontext/usecontext";
const Header = (type) =>{
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [openDate,setOpenDate]=useState(false)
    const handleOpenCalendar=()=>{
        setOpenDate(!openDate)
    }
    const[openOption,setOpenOption]=useState(false)
    const [option,setOption]=useState({
        adult:1,
        children:0,
        room:1,
    })
    const handleOpenOption=()=>{
        setOpenOption(!openOption)
    }
    const handleOption=(name,operation)=>{
        setOption((prev)=>{
            return{
                ...prev,
                [name]:operation==="i"? option[name]+1:option[name]-1
            }
        })
    }
    const [destination,setDestination]=useState("");
    const navigate=useNavigate();
    const {dispatch}=useContext(HotelSearchContext)

    const handleSearch=()=>{
        dispatch({type:"new_search",payload:{destination,date,option}})
        navigate("/hotel",{state:{destination,date,option}})
    }


    return (
        <div className="contain_header">
            <div className="p">
                <p className="header_title1">Welcome to HLP to29fQ</p>
            </div>
            <Link to="/spin" className="header_title2"> Click to get some discount for you</Link>
            <Link to="/login">
                <button className="header_btn">Sign In/Register</button>
            </Link>
            <div className="header_search">
                <div className="search">
                    <div className="header_search_item">
                        <HotelIcon className="header_search_icon"/>
                        <input
                            className="header_search_input"
                            placeholder="Where are you going to?"
                            type="text"
                            onChange={e=>setDestination(e.target.value)}/>
                    </div>
                    <div className="header_search_item">
                        <CalendarMonthIcon
                        className="header_search_icon"
                        onClick={handleOpenCalendar}
                        />
                        <span
                        className="header_search_text"
                        onClick={handleOpenCalendar}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}` }</span>
                        {openDate&&
                        <DateRange
                            className="calendar"
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                        />}
                    </div>
                    <div className="header_search_item">
                        <BoyIcon 
                        onClick={handleOpenOption}
                        className="header_search_icon"/>
                        <span 
                        onClick={handleOpenOption}
                        className="header_search_text">{`${option.adult} adult,${option.children} children,${option.room} room `}</span>
                        {openOption &&
                        <div className="header_option">
                        <div className="option_item">
                            <span className="option_text">Adult</span>
                            <div className="option_count">
                                <button 
                                onClick={()=>handleOption("adult","i")}
                                className="option_count_btn" >+</button>
                                <span className="option_number">{option.adult}</span>
                                <button 
                                onClick={()=>handleOption("adult","d")}
                                className="option_count_btn"
                                disabled={option.adult<1}>-</button>
                            </div>
                        </div>
                        <div className="option_item">
                            <span className="option_text">Children</span>
                            <div className="option_count">
                                <button
                                onClick={()=>handleOption("children","i")}
                                className="option_count_btn">+</button>
                                <span className="option_number">{option.children}</span>
                                <button 
                                onClick={()=>handleOption("children","d")}
                                className="option_count_btn"
                                disabled={option.children<1}>-</button>
                            </div>
                        </div>
                        <div className="option_item">
                            <span className="option_text">Room</span>
                            <div className="option_count">
                                <button
                                onClick={()=>handleOption("room","i")}
                                className="option_count_btn">+</button>
                                <span className="option_number">{option.room}</span>
                                <button
                                onClick={()=>handleOption("room","d")}
                                className="option_count_btn"
                                disabled={option.room<1}>-</button>
                            </div>
                        </div>
                    </div>}
                    </div>
                    <button
                    onClick={handleSearch}
                    className="header_search_btn">Search</button>
                </div>
            </div>
        </div>
    )
}


export default Header