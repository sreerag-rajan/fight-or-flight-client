import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Flex sx={{height:"50px", border:"1px solid black", backgroundColor:"#F9FFA4"}} marginBottom="20px" alignItems="center" justifyContent={"space-around"}>
                <Link to="/">Home</Link>
                <Link to="/addairport">Add Airport</Link>
                <Link to="/addflight">Add Flight</Link>
            </Flex>
        )
    }
}

export {Navbar}