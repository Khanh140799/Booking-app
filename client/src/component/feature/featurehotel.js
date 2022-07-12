import React from "react"
import useFetch from "../hooks/fetch"
import "./featurehotel.css"

const FeatureHotel=()=>{
    const {data,loading,error}=useFetch("http://localhost:3001/api/hotel/countByCity?cities=Phu Quoc,Ha Noi,Sai Gon")
    return(
            <div className="hotel_city">
                {loading ? "Loading":
                <>
                    {data.map((hotel,index)=>(
                         <div className="hotel_city_item">
                            <img className="city_imgage"
                            src="https://images.pexels.com/photos/1506836/pexels-photo-1506836.png?cs=srgb&dl=pexels-thanhhoa-tran-1506836.jpg&fm=jpg"
                            alt="Phu Quoc">
                            </img>
                            <span className="city_name">Phú Quốc</span>
                            <h1 className="feature_hotel_count">{data[index]} properties</h1>
                        </div>
                    ))}
                
                </>}
            </div>
    )
}

export default FeatureHotel