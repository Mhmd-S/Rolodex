import React, {useState} from 'react';
import './App.css';
import './Styles/From.css'
import './Styles/RolodexItem.css'
import './Styles/Rolodex.css'
import Form from './Components/Form';
import Rolodex from './Components/Rolodex';
import Card from './Components/Card';

function App() {
  const [rolodex, setRolodex] = useState([]);
  const [displayRolodex, setDisplayRolodex] = useState([]);
  const [selectedCard, setSelectedCard] = useState('');
  const [formShow, setFormShow] = useState(true)

  const hoistDataForm = (data) => {
    data.cardID = data.lastName + data.dob;
    if (rolodex.some(card => card.cardID == data.cardID)) {
      return;
    }
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
        {formShow ? <Form  hoistDataForm={hoistDataForm} closeForm={()=>{setFormShow(false)}}/> : (selectedCard != null ? <Card cardInfo={selectedCard} /> : "Welcome Suleiman!")}
        </div>
    </div>  
  );
}

export default App;
