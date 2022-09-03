import './App.css';
import Button from './components/Button';
import Autocomplete from './components/Autocomplete';
import ListItem from './components/ListItem';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useState } from 'react';
import { pink } from 'color-name';

function App() {
  return (
    <div className="App">
      {/* <Button>SUBMIT</Button>
      <Button variant="secondary">SKIP (+2s)</Button>
      <Button variant="icon" textSize="large"><AiOutlineInfoCircle/></Button> */}
      {/* <Autocomplete/> */}
      <ListItem result="positive"/>
    </div>
  );
}

export default App;
