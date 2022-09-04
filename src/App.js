import './App.css';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Header from './components/Header';
import PlayerContainer from './components/PlayerContainer';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [ loading, setLoading ] = useState(false);
  return (
    <div className="App bg-custom-bg text-custom-fg overflow-auto flex flex-col mobile-h" id="app">
      <Header />
      {
        loading
        ? <>
          <div className="max-w-screen-sm w-full mx-auto flex-col h-24">
            <div className="text-center m-3 mt-6 text-slate-50">
              Loading...
            </div>
          </div>
          </>
        : <PlayerContainer />
      }
      {/* <DisplayResult />
      <PlayerContainer />
      <Footer /> */}
      {/* <Button>SUBMIT</Button>
      <Button variant="secondary">SKIP (+2s)</Button>
      <Button variant="icon" textSize="large"><AiOutlineInfoCircle/></Button> */}
      {/* <Autocomplete/> */}
      {/* <ListItem result="positive"/> */}
    </div>
  );
}

export default App;
