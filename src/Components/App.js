import React,{useState} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Contacts from "./Contacts";

function App() {
    const [contacts , setContacts] = useState([{
        name: 'Mehmet Seven',
        phone: '5486454313'
    },{
        name: 'Ahmet Seven',
        phone: '5648635335'
    }]);

  return (
    <div className="App">
      <Contacts contacts={contacts}/>
    </div>
  );
}

export default App;
