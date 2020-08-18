import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Contacts from "./Contacts";

class App extends React.Component{
    state = {
        contacts: [{
            name: 'Mehmet Seven',
            phone: '5486454313'
        },{
            name: 'Ahmet Seven',
            phone: '5648635335'
        }]
    }

    addContacts = (contact) => {
        const { contacts } = this.state;
        contacts.push(contact);

        this.setState({
            contacts
        })
}


    render(){
        return (
            <div className="App">
                <Contacts
                    addContact={this.addContacts}
                    contacts={this.state.contacts}/>
            </div>
        )
    }
}

export default App;




