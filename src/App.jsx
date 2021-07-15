import './App.css'
import Form from './components/Form';
import ContactList from './components/ContactList'
import React from 'react'
import loading from './progress-loading-bar-buffering-download-upload-and-loading-icon-vector.jpg'

export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
            loading: true,
            contacts : [
        { name: "Viviane Brunie", tel:"458566", email:"vivi@hotmail.com"},
        { name: "Zak Hayward", tel:"7936541", email:"zakie@hotmail.com"}
    ]
        }
    }


    componentDidMount() {
        const string = localStorage.getItem("contact")
        const contact = JSON.parse(string)
        if(contact === null){
            return 
        }
        this.setState({contacts:contact})
        
        this.timer = setInterval(() => {
            this.setState({loading: false})
        }, 1000);
        
    }

    createContact = (contact) => {
        const newContacts = [...this.state.contacts];
        newContacts.push(contact);
        this.setState({contacts: newContacts});

        localStorage.setItem("contact", JSON.stringify(newContacts))
  }

    deleteContact = (i) => {
        const newContacts = [...this.state.contacts];
        newContacts.splice(i, 1)
        this.setState({contacts: newContacts});

        localStorage.setItem("contact", JSON.stringify(newContacts))
  }
    

    render(){
    return(
        <div >
            {this.state.loading === true ? <div className="logo"></div> : 
                <div><h1 className="font">React Contact Address book</h1>
            <Form className="form"createContact={this.createContact}/>
            <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact}/>
            </div>}
            
        </div>
    );
}}