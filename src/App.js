import React, {useState} from 'react';
import './App.css';
import './Styles/From.css'
import './Styles/RolodexItem.css'
import './Styles/Rolodex.css'
import './Styles/Card.css'
import Form from './Components/Form';
import Rolodex from './Components/Rolodex';
import Card from './Components/Card';

function App() {
  const [rolodex, setRolodex] = useState([{
      "honorifics": "Mr",
      "firstName": "Mohamed",
      "occupation": "Teacher",
      "middleName": "Ahmad",
      "dob": "2001-12-31",
      "lastName": "Suleiman",
      "contactInfo": "0182975619",
      "address": "The Square @ One City, Jalan Harmoni Street, \nOne City, Subang Jaya, Selangor,\nMalaysia",
      "notes": "Works for the CIA Malaysian desk.\nGraduated with honors from APU.\nBsc in Computer Science.\nHad dinner with MS at the Annual Conference of The Great.\nInvited MS to have drinks at the Royal Gentlemen Club.\nMarried to July Augustine on 03/09/1999.\n\n",
      "cardID": "Suleiman2001-12-31"
  }]);
  const [displayRolodex, setDisplayRolodex] = useState([]);
  const [selectedCard, setSelectedCard] = useState('');
  const [formShow, setFormShow] = useState(false)

  const hoistDataForm = (data) => {
    data.cardID = data.lastName + data.dob;
    if (rolodex.some(card => card.cardID == data.cardID)) {
      return;
    }
    setFormShow(false);
    setRolodex([...rolodex, data])
  }

  const selectCard = (info) => {
    setSelectedCard(info)
    setFormShow(false);
  }

  const handleSearch = (e) => {
    const input = e.target.value.toLowerCase();
    let rolodexCopy = rolodex;
    rolodexCopy = rolodexCopy.filter(item => (item.firstName.toLowerCase().startsWith(input) || item.middleName.toLowerCase().startsWith(input) || item.lastName.toLowerCase().startsWith(input)));
    setDisplayRolodex(rolodexCopy);
  }

  return (
    <div className="App-Container">
        <Rolodex selectCard={selectCard} rolodexData={displayRolodex[0] ? displayRolodex : rolodex} showForm={setFormShow} handleSearch={handleSearch}  selectedCard={selectedCard} />
      <div className="App-FormCard-Container">
        {formShow ? <Form  hoistDataForm={hoistDataForm} closeForm={()=>{setFormShow(false)}}/> : (selectedCard != '' ? <Card cardInfo={selectedCard} /> : <div className="App-Welcome-Container">Welcome Dear User!</div>)}
        </div>
    </div>  
  );
}

export default App;
