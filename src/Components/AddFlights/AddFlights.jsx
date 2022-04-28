import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addFlight } from "../../Redux/flights/flights.action";

export const AddFlight = ()=>{
    const dispatch = useDispatch();
    const [airports, setAirports] = useState([]);
    const [formData, setFormData] = useState({
        flightCompany:"",
        flightNumber:"",
        startAirport:"",
        endAirport:"",
        startTime:"",
        endTime:"",
        cost:"",
        capacity:""
    })

    useEffect(()=>{
        axios.get("http://localhost:8080/airport").then(({data})=>{
            console.log("Airports:", data);
            setAirports(data);
        })
    },[])
    const handleChange = (e)=>{
        const {id, value} = e.target;
        setFormData({...formData, [id]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/flights", formData).then(({data})=>{
            console.log("data from submit: ",data);
            dispatch(addFlight(data))
        })
    }
    return(
        <div>
            <h1>Add FLights</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="flightCompany">Flight:
                <input onChange={handleChange} value={formData.flightCompany} type="text" name="flightCompany" id="flightCompany"/>
                </label>
                <br />
                <label htmlFor="flightNumber">Flight Number:
                <input onChange={handleChange} value={formData.flightNumber} type="text" name="flightNumber" id="flightNumber"/>
                </label>
                <br />
                <label htmlFor="from">From:
                <select name="from" id="startAirport" onChange={handleChange} value={formData.startAirport}>
                    <option>--</option>
                    {airports?.map((el)=>{
                        return <option key={el._id} value={el._id}>{el.code} - {el.name}</option>
                    })}
                </select>
                </label>
                <br />
                <label htmlFor="to">To:
                <select name="to" id="endAirport" onChange={handleChange} value={formData.endAirport}>
                    <option>--</option>
                    {airports?.map((el)=>{
                        return <option key={el._id} value={el._id}>{el.code} - {el.name}</option>
                    })}
                </select>
                </label>
                <br />
                <label htmlFor="startTime">Start Time:
                <input onChange={handleChange} type="datetime-local" name="startTime" id="startTime" value={formData.startTime} />
                </label>
                <br />
                <label htmlFor="endTime">End Time:
                <input onChange={handleChange} type="datetime-local" name="endTime" id="endTime" value={formData.endTime} />
                </label>
                <br />
                <label htmlFor="capacity">Cost:
                <input onChange={handleChange} type="number" name="cost" id="cost" value={formData.cost} />
                </label>
                <br />
                <label htmlFor="capacity">Capacity (in Kgs):
                <input onChange={handleChange} type="number" name="capacity" id="capacity" value={formData.capacity} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}