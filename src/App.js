import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';

function App() {
  const [rolodex, setRolodex] = useState([]);

  return (
    <div className="App">
     <Form  hoistDataForm={(data)=>{setRolodex([...rolodex, data])}}/>
    </div>
  );
}

export default App;
