import { TableContainer, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Tr, Th, Td, Button, Heading, Box, Text, Flex, Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription, } from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react";
import { useToast } from '@chakra-ui/react'


export const Register = ()=>{
    const [isCustomer, setIsCustomer] = useState(true);
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        role:isCustomer?"Customer":"Admin",
        company:"",
        employeeId:""
    })
    const toast = useToast()

    const handleChange =(e)=>{
        const {name, value} = e.target;

        setFormData({...formData, [name]:value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/auth/register",formData).then(({data})=>{
            console.log(data);
            toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            setFormData({
                firstName:"",
                lastName:"",
                email:"",
                password:"",
                role:isCustomer?"Customer":"Admin",
                company:"",
                employeeId:""
            })
        })
    }

    return(
    <div>
        {isCustomer?<Heading as={"h1"}>Hello Customer!</Heading>:<Heading as={"h1"}>Register as Admin</Heading>}
        <TableContainer padding={"10px"} width={"20%"} margin="auto">
            <FormControl >
                <Tr>
                    <Th>
                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                    </Th>
                    <Td>
                        <Input onChange={handleChange} name="firstName" type={"text"} value={formData.firstName}/>
                    </Td>
                </Tr>
                <Tr>
                    <Th>
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    </Th>
                    <Td>
                        <Input onChange={handleChange} name="lastName" type={"text"} value={formData.lastName}/>
                    </Td>
                </Tr>
                <Tr>
                    <Th>
                        <FormLabel htmlFor="email">Email</FormLabel>
                    </Th>
                    <Td>
                        <Input onChange={handleChange} name="email" type={"email"} value={formData.email}/>
                    </Td>
                </Tr>
                <Tr>
                    <Th>
                        <FormLabel htmlFor="password">Password</FormLabel>
                    </Th>
                    <Td>
                        <Input onChange={handleChange} name="password" type={"password"} value={formData.password}/>
                    </Td>
                </Tr>
                {!isCustomer&&<><Tr>
                    <Th>
                        <FormLabel htmlFor="company">Company</FormLabel>
                    </Th>
                    <Td>
                        <Input onChange={handleChange} name="company" type={"text"} value={formData.company}/>
                    </Td>
                </Tr>
                <Tr>
                    <Th>
                        <FormLabel htmlFor="employeeId">Employee Id</FormLabel>
                    </Th>
                    <Td>
                        <Input onChange={handleChange} name="employeeId" type={"text"} value={formData.employeeId}/>
                    </Td>
                </Tr></>}
                <Tr>
                    <Td colSpan={"2"}>
                        <Button onClick={handleSubmit}>Register</Button>
                    </Td>
                </Tr>
            </FormControl>

        </TableContainer>
        {!isCustomer&&<>
            <Alert width={"50%"} margin="auto" status='error'>
                <AlertIcon />
                <AlertDescription>Your Employee Id will be verified with the company. In case they do not match with the details provided, your account will be deactivated and action may be taken against you.</AlertDescription>
            </Alert>
            <Alert width={"50%"} margin="auto" marginTop={"10px"} status='info'>
                <AlertIcon />
                Ideally I would not have liked to do admin registration this way. It is highly unsecure. But for the demo purposes this was what seemed workable
            </Alert>
        </>
        }

        {isCustomer?<Flex width={"30%"} border="1px solid black" borderRadius={"10px"} backgroundColor="lightgray" margin={"auto"} marginTop="30px" padding={"20px"}>
            <Text>Are you associated with Airline Companies? Then Register as Admin</Text>
            <Button onClick={()=>{setIsCustomer(false)}} fontSize={"12px"}>Register as <br/> Admin</Button>
        </Flex>:<Box width={"30%"} border="1px solid black" borderRadius={"10px"} backgroundColor="lightgray" margin={"auto"} marginTop="30px" padding={"20px"}>
            <Button onClick={()=>{setIsCustomer(true)}}>Register as Customer</Button>
        </Box>}
        

    </div>
    )
}