import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


const Navbar = ()=>{
    const user = useSelector((store)=>store.auth.user);
    const navigate = useNavigate()
    return(
        <Flex sx={{height:"50px", border:"1px solid black", backgroundColor:"#F9FFA4"}} padding="10px" marginBottom="20px" alignItems="center" justifyContent={"space-between"}>
            <Link to="/">Home</Link>
            {user?user.role==="Admin"?<Flex gap="10px">
            <Button onClick={()=>{navigate("/addairport")}}>Add Airport</Button>
            <Button onClick={()=>{navigate("/addflight")}}>Add Flight</Button>
            <Button>Logout</Button>
            </Flex>:<Button>Logout</Button>:<Flex gap="10px" justifyContent={"flex-end"}>
            <Button onClick={()=>{
                navigate("/login")
            }}>Login</Button>
            <Button onClick={()=>{
                navigate("/register")
            }}>Register</Button>
            </Flex>}
        </Flex>
    )
    
}

export {Navbar}