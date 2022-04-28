import axios from "axios";
import React from "react";


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
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.formData.code} type="text" name="" id="code" placeholder="Airport Code" />
                    <input onChange={this.handleChange} value={this.state.formData.name} type="text" name="" id="name" placeholder="Airport Name" />
                    <input onChange={this.handleChange} value={this.state.formData.city} type="text" name="" id="city" placeholder="City"/>
                    <input onChange={this.handleChange} value={this.state.formData.state} type="text" name="" id="state" placeholder="State"/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>)
    }
}

export {AddAirport}