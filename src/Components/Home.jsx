import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFlightsData, setFlights } from '../Redux/flights/flights.action'
import {Table, Thead, Tbody, Tr, Th, Td, TableContainer, Select, Flex, Button} from '@chakra-ui/react'
import axios from 'axios'


export const Home = ()=>{
    const flights = useSelector((store)=>store.flights.flights)
    const dispatch = useDispatch();
    const [airports, setAirports] = useState([])
    const [formData, setFormData] = useState({
        start:"",
        end:""
    })

    useEffect(()=>{
        dispatch(getFlightsData())
        axios.get("http://localhost:8080/airport").then((({data})=>{
            setAirports(data);
        }))
    },[])

    const handleChange=(e)=>{
        const {id, value} = e.target
        setFormData({...formData, [id]:value})
    }

    const handleSearch = ()=>{
        axios.get(`http://localhost:8080/flights/search?start=${formData.start}&end=${formData.end}`).then(({data})=>{
            dispatch(setFlights(data));
        })
        .catch((er)=>{
            console.log(er)
        })
    }
    return(
        <div>
            <h1>Fight or Flight</h1>
            <div>
                <Flex justifyContent={"center"} margin={"40px"} gap={"20px"}>
                <Select onChange={handleChange} value={formData.start} width={"300px"} placeholder="From" size="sm" name="start" id="start">
                    {airports?.map((el)=>{
                        return <option value={el._id}>{el.code}-{el.name}</option>
                    })}
                </Select>
                <Select onChange={handleChange} value={formData.end} width={"300px"} placeholder="To" size="sm" name="end" id="end">
                    {airports?.map((el)=>{
                        return <option value={el._id}>{el.code}-{el.name}</option>
                    })}
                </Select>
                <Button onClick={handleSearch}>Search</Button>
                </Flex>
            </div>
            <TableContainer>
            <Table variant={"striped"}>
                <Thead>
                    <Tr>
                        <Th>Airline</Th>
                        <Th>From</Th>
                        <Th>To</Th>
                        <Th>Start Date</Th>
                        <Th>Start Time</Th>
                        <Th>End Date</Th>
                        <Th>End Time</Th>
                        <Th>Cost</Th>
                        <Th>Capacity</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {flights?.map((el,i)=>{
                    return <Tr key={el._id}>
                        <Td>{el.flightCompany}-{el.flightNumber}</Td>
                        <Td>{el.startAirport.name}</Td>
                        <Td>{el.endAirport.name}</Td>
                        <Td>{new Date(el.startTime).toLocaleDateString()}</Td>
                        <Td> {new Date(el.startTime).toLocaleTimeString()}</Td>
                        <Td>{new Date(el.endTime).toLocaleDateString()}</Td>
                        <Td>{new Date(el.endTime).toLocaleTimeString()}</Td>
                        <Td isNumeric>{el.cost}</Td>
                        <Td>{el.capacity} kgs</Td>
                    </Tr>
                })}

                </Tbody>
            </Table>
            </TableContainer>
            
        </div>
    )
}


