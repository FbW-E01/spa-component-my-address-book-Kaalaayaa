import React, { useState} from "react"

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            tel: "",
            email: ""
        }
    }

    click = () => {
        console.log("Created");
        this.props.createContact({
            name: this.state.name,
            tel: this.state.tel,
            email: this.state.email,
        })
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("form was submitted")}
        
    render(){
        return(
                <form onSubmit={this.handleSubmit} className="form">
                    <input 
                    type="text" 
                    placeholder="Name"
                    onChange={this.handleChange}
                    name="name"
                    />
                    <input 
                    type="tel" 
                    placeholder="Phone"
                    onChange={this.handleChange}
                    name="tel"
                    />
                    <input 
                    type="email" 
                    placeholder="Email"
                    onChange={this.handleChange}
                    name="email"
                    />
                    <button type="submit" onClick={this.click}>Add Contact</button>
                </form>
    )}
}

export default Form