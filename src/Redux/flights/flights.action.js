import axios from "axios";

export const SET_FLIGHTS = "SET_FLIGHTS";
export const ADD_FLIGHT = "ADD_FLIGHT";


export const setFlights = (payload)=>({type:SET_FLIGHTS, payload})
export const addFlight = (payload)=>({type:ADD_FLIGHT, payload})


export const getFlightsData = ()=>(dispatch)=>{
    axios.get("http://localhost:8080/flights/allflights").then(({data})=>{
        console.log(data)
        dispatch(setFlights(data));
    })
}