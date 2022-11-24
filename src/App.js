import React, {useState, useEffect} from 'react';
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
      "cardID": "MohamedSuleiman2001-12-31"
  }]);
  const [displayRolodex, setDisplayRolodex] = useState([]);
  const [selectedCard, setSelectedCard] = useState('');
  const [formShow, setFormShow] = useState(false);
  const [warningMsg, setWarningMsg] = useState('');

  const showForm = () => {
    if (formShow === true && selectedCard !== '') {
      setWarningMsg('Please finilaze the edit currently in progress.');
      return;
    } else if (selectedCard !== '') {
      setSelectedCard('');
    }
    setFormShow(true);
  }

  const hoistDataForm = (data) => {
    data.cardID = data.firstName + data.lastName + data.dob;
    if (rolodex.some(card => card.cardID == data.cardID) && selectedCard === '') {
      setWarningMsg('Card already exists with that name and date of birth.')
      return;
    } else if (rolodex.some(card => card.cardID == data.cardID) && selectedCard !== '') {
      let rolodexCopy = rolodex.slice();
      rolodexCopy = rolodexCopy.map(item => {return item.cardID == selectedCard.cardID ? data : item});
      setFormShow(false);
      setRolodex(rolodexCopy);
    } else {
      setFormShow(false);
      setRolodex([...rolodex, data])
    }
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

  useEffect(()=> {
    const timedWarning = setTimeout(() => setWarningMsg(''), 2000 );
    return () => clearTimeout(timedWarning);
  }, [warningMsg])

  return (
    <div className="App-Container">
        <Rolodex selectCard={selectCard} rolodexData={displayRolodex[0] ? displayRolodex : rolodex} showForm={showForm} handleSearch={handleSearch}  selectedCard={selectedCard} />
      <div className="App-FormCard-Container">
        {warningMsg && <div className="App-Warning-Container">{warningMsg}</div>}
        {formShow ? <Form  hoistDataForm={hoistDataForm} closeForm={()=>{setFormShow(false)}} editCardInfo={selectedCard} /> : (selectedCard !== '' ? <Card cardInfo={selectedCard} editCard={()=>setFormShow(true)} /> : <div className="App-Welcome-Container">Welcome Dear User!</div>)}
        </div>
    </div>  
  );
}

export default App;
