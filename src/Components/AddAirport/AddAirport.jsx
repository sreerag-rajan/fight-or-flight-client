import axios from "axios";
import React from "react";
import {Input, FormControl,FormLabel,} from "@chakra-ui/react"


class AddAirport extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            formData:{
                code:"",
                name:"",
                city:"",
                state:""
            }
        }
    }

    handleChange = (e)=>{
        const {id, value} = e.target;
        this.setState({
            formData:{...this.state.formData, [id]:value}
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state.formData);
        axios.post("http://localhost:8080/airport", this.state.formData).then(({data})=>{
            console.log(data);
            this.setState({
                formData:{
                    code:"",
                    name:"",
                    city:"",
                    state:""
                }
            })
        })
    }

    render(){
        return(<div>
            <h1>Add Airport</h1>
            <div>
                <FormControl width={"50%"} margin="auto" marginTop={"30px"}  display={"flex"} flexDirection="column" gap={"10px"} onSubmit={this.handleSubmit}>
                    <Input sx={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}} onChange={this.handleChange} value={this.state.formData.code} type="text" name="" id="code" placeholder="Airport Code" />
                    <Input sx={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}} onChange={this.handleChange} value={this.state.formData.name} type="text" name="" id="name" placeholder="Airport Name" />
                    <Input sx={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}} onChange={this.handleChange} value={this.state.formData.city} type="text" name="" id="city" placeholder="City"/>
                    <Input sx={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}} onChange={this.handleChange} value={this.state.formData.state} type="text" name="" id="state" placeholder="State"/>
                    <Input sx={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}  type="submit" value="Submit" />
                </FormControl>
            </div>
        </div>)
    }
}

export {AddAirport}