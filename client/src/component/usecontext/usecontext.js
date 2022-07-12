import React, { useReducer } from "react"

const intitial_state={
    city:undefined,
    date:[],
    option:{
        adult:undefined,
        chidren:undefined,
        room:undefined,
    },
}
export const HotelSearchContext=React.createContext(intitial_state);
const HotelSearchReducer=(state,action)=>{
    switch (action.type){
        case "new_search":
            return action.payload;
        case "reset_search":
            return intitial_state;
            default:
                return state
    }
}
export const HotelSearchContextProvider=({children})=>{
    const [state,dispatch]=useReducer(HotelSearchReducer,intitial_state)
    return (
        <HotelSearchContext.Provider value={{city:state.city,date:state.date,option:state.option,dispatch}}>
            {children}
        </HotelSearchContext.Provider>
    )
}
