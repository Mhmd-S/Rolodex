import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';
import Rolodex from './Components/Rolodex';
import Card from './Components/Card';

function App() {
  const [rolodex, setRolodex] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [formShow, setFormShow] = useState(false)

  const hoistDataForm = (data) => {
    setRolodex([...rolodex, data])
  }

  const selectCard = (cardID) => {
    setSelectedCard(cardID)
    setFormShow(false);
  }

  return (
    <div className="App-Container">
      <div className="App-Rolodex-List-Container">
        <div className="App-Rolodex-List-Header">
          <p className="App-Rolodex-List-Header-Title">Cards</p>
          <button className='App-Rolodex-List-Header-AddButton' onClick={()=>setFormShow(true)}>Add</button>
        </div>
        <Rolodex selectCard={selectCard} rolodexData={rolodex}/> 
      </div>
      {formShow ? <Form  hoistDataForm={hoistDataForm}/> : (selectedCard ? <Card cardInfo={rolodex[selectedCard]} /> : "Welcome Suleiman!")}
    </div>  
  );
}

export default App;
