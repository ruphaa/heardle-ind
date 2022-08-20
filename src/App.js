import './App.css';
import Button from './components/Button';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function App() {
  return (
    <div className="App">
      <Button>SUBMIT</Button>
      <Button variant="secondary">SKIP (+2s)</Button>
      <Button variant="icon" textSize="large"><AiOutlineInfoCircle/></Button>
    </div>
  );
}

export default App;
