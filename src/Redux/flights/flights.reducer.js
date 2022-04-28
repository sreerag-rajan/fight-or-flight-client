import { ADD_FLIGHT, SET_FLIGHTS } from "./flights.action"

const initState = {
    flights : [],
    flightLoading:false
}

export const flightReducer = (store= initState, {type, payload})=>{
    switch(type){
        case SET_FLIGHTS:
            return {...store, flights:[...payload]}
        case ADD_FLIGHT:
            return {...store, flights:[...store.flights, payload ]}
        default:
            return store
    }
}