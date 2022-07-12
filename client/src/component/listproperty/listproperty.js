import React from "react";
import './listproperty.css'
import useFetch from "../hooks/fetch";

const ListProperty=()=>{
    const {data,loading,error}=useFetch("http://localhost:3001/api/hotel/countByType")
    return(
        <div className="list_property_city">
            <div className="property_tille">
                Brower City By Property
            </div>
            {loading?"Loading":
            <>
            <div className="list_property_city_list">    
                {data.map((hotel,index)=>(
                <div className="list_property_city_item">
                    <img 
                    className="property_city_img"
                    src="https://kenhhomestay.com/wp-content/uploads/2020/09/Pharaon-Hotel-16.jpg"
                    alt="Love Room"/>
                    <div className="property_city_name">
                        {data[index].type}
                    </div>
                    <div className="property_city_count">
                        {data[index].count} Hotel
                    </div>
                </div>
                ))}
            </div>
            </>}
        </div>
    )
}
export default ListProperty;