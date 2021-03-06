import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddAirport } from "../AddAirport/AddAirport";
import { AddFlight } from "../AddFlights/AddFlights";
import {Home} from "../Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";

class AllRoutes extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/addairport" element={<AddAirport/>}/>
                <Route path="/addflight" element={<AddFlight/>}/>
            </Routes>
        )
    }
}

export {AllRoutes}