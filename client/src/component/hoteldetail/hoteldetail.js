import React, { useContext, useState } from 'react'
import './hoteldetail.css'
import RoomIcon from '@mui/icons-material/Room';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import useFetch from '../hooks/fetch';
import { useLocation } from 'react-router-dom';
import { HotelSearchContext } from '../usecontext/usecontext';

const HotelDetail = () => {
  const photo=[
    {
      src:"https://pula.vn/storage/images/2021/11/20/giuong-ngu-pula-pb10-1-1637342942.jpeg"
    },
    {
      src:"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190704102824-05-phu-quoc-vietnam.jpg"
    },{
      src:"https://pula.vn/storage/images/2021/11/20/giuong-ngu-pula-pb10-1-1637342942.jpeg"
    }
    ,{
      src:"https://pula.vn/storage/images/2021/11/20/giuong-ngu-pula-pb10-1-1637342942.jpeg"
    }
    ,{
      src:"https://pula.vn/storage/images/2021/11/20/giuong-ngu-pula-pb10-1-1637342942.jpeg"
    }
    ,{
      src:"https://pula.vn/storage/images/2021/11/20/giuong-ngu-pula-pb10-1-1637342942.jpeg"
    }
    ,{
      src:"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190704154936-sao-beach-phu-quoc.jpg"
    }
  ]
  const length=photo.length
  const [slide,setSlide]=useState(0)
  const [open,setOpen]=useState(false)
  const handleOpenImage=(index)=>{
    setSlide(index)
    setOpen(true)
  }
  const handleBackImage=()=>{
    if(slide>0){
      setSlide(prev=>prev-1)
    }
    else{
      setSlide(length-1)
    }
  }
  const handleNextImage=()=>{
    if(slide<length-1){
      setSlide(prev=>prev+1)
    }
    else{
      setSlide(0)
    }
  }
  const handleClose=()=>{
    setOpen(false)
  }
  const location=useLocation();
  const path=location.pathname.split("/")[2];
  const {data,loading,error}=useFetch(`http://localhost:3001/api/hotel/find/${path}`)

  const {date,option}=useContext(HotelSearchContext)
  const countDays=(startDay,endDay)=>{
    const timeDiff=Math.abs(endDay.getTime()-startDay.getTime());
    const dayDiff=Math.ceil(timeDiff/1000/60/60/24);
    return dayDiff
  }
  const days=countDays(date[0].startDate,date[0].endDate)
  return (
    <div className='hotel_detail_contain'>
        {open&&
        <div className='hotel_detail_slide'>
          <ArrowBackIcon className='back_btn' onClick={handleBackImage}/>
          <ArrowForwardIcon className='next_btn' onClick={handleNextImage}/>
          <CloseIcon className='close_btn' onClick={handleClose}/>
          <div className='slide_wrapper'>
            <img 
            className='slide_image'
            src={photo[slide].src}
            alt="Beautifull"/>
          </div>
        </div>}
        {loading?"Loading":<>
        <div className='hotel_detail_property'>
          <div className='hotel_detail_kind'>
            <div className='hotel_detail_name'>
              {data.name}
            </div>
            <a className='hotel_detail_contain_a' href={"https://goo.gl/maps/BDyodQ33feoTy9NK8"}>
              <div className='hotel_detail_distance'>
                  <RoomIcon className='hotel_detail_distance_icon'/>
                  <div className='hotel_detail_distance_text'>{data.distance} to the center</div>
              </div>
            </a>
            <div className='hotel_detail_move'>
              Free airport taxi
            </div>
            <ul className='hotel_detail_property'>
                <li className='hotel_detail_room'>
                  Standard Room
                </li>
                <li className='hotel_detail_area'>
                  21 m2
                </li>
                <li className='hotel_detail_bed'>
                  2 bed
                </li>
            </ul>
            <div className='hotel_detail_ultil'>
              Free paking and free wifi
            </div>
            <div className='hotel_detail_title'>
              You can cancel later, so lock in this great price today!
            </div>
          </div>
          <button className='hotel_detail_btn'>
            Reserve or Book now
          </button>
        </div>
          <div className='hotel_detail_list_img'>
            {photo.map((pt,index)=>(
            <div className='hotel_detail_wrapper'>
                <img
                id={index}
                className='hotel_detail_img'
                alt='Hotel HLP to 29fQ'
                onClick={()=>handleOpenImage(index)}
                src={pt.src}/>
            </div>
          ))}
        </div>
        <div className='hotel_detail_description'>
              <div className='decription_hotel'>
                  <h1>
                    {data.address}
                  </h1>
                  <div className='decription_hotel_content'>
                    Tại khách sạn có quầy bar với nhiều lựa chọn đồ uống. Sẽ thật dễ chịu khi thư giãn trên sân trước nhà với một tách cà phê vào bất kỳ thời điểm nào trong năm. Nếu bạn muốn đưa thú cưng của bạn đi nghỉ, ở đây sẽ chào đón bạn, quan trọng là bạn hãy trình bầy các chi tiết với điều hành.
                  </div>
              </div>
              <div className='hotel_detail_price'>
                  <h1>Perfect for {days} today</h1>
                  <span>This proprtty has an excellent location socore is 9</span>
                  <h2>
                    <b>${data.cheapestPrice*days*option.room}</b> /{days} night
                  </h2>
                  <button>Reserve or Book Now</button>
              </div>
        </div>
        </>}
    </div>
  )
}

export default HotelDetail