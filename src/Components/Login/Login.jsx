import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/Auth/auth.action";
import { useToast } from "@chakra-ui/react";

export const Login = ()=>{
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })
    const dispatch = useDispatch()
    const toast = useToast()

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e)=>{
        axios.post("http://localhost:8080/auth/login", formData).then(({data})=>{
            console.log(data.user)
            dispatch(setUser(data.user));
            setFormData({
                email:"",
                password:""
            })
            toast({
                title: 'Successfully logged in.',
                // description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        })
    }
    return <div>
        <FormControl width="30%" margin="auto">
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input onChange={handleChange} type="email" value={formData.email} name="email"/>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input type="password" name="password" value={formData.password} onChange={handleChange}/>
            <Button onClick={handleSubmit}>Login</Button>
        </FormControl>

    </div>
}