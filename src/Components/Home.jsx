import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFlightsData } from '../Redux/flights/flights.action'


export const Home = ()=>{
    const flights = useSelector((store)=>store.flights.flights)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getFlightsData())
    },[])
    return(
        <div>
            <h1>Fight or Flight</h1>
            <table>
                <thead>
                    <tr>
                        <th>Airline</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Start Date</th>
                        <th>Start Time</th>
                        <th>End Date</th>
                        <th>End Time</th>
                        <th>Cost</th>
                        <th>Capacity</th>
                    </tr>
                </thead>
                <tbody>
                {flights?.map((el,i)=>{
                    return <tr key={el._id}>
                        <td>{el.flightCompany}-{el.flightNumber}</td>
                        <td>{el.startAirport.name}</td>
                        <td>{el.endAirport.name}</td>
                        <td>{new Date(el.startTime).toLocaleDateString()}</td>
                        <td> {new Date(el.startTime).toLocaleTimeString()}</td>
                        <td>{new Date(el.endTime).toLocaleDateString()}</td>
                        <td>{new Date(el.endTime).toLocaleTimeString()}</td>
                        <td>{el.cost}</td>
                        <td>{el.capacity} kgs</td>
                    </tr>
                })}

                </tbody>
            </table>
            
        </div>
    )
}


