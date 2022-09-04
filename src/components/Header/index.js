import { useState } from 'react';
import Button from '../Button';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { RiQuestionLine } from 'react-icons/ri';
import Modal from 'react-modal';

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }

  const customStyles = {
    overlay: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.8)',
      zIndex: 1000,
    },
    content: {
      pointerEvents: 'auto',
      position: 'relative',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '100%',
      maxWidth: '468px',
      background: '#121212',
      border: '1px solid #444',
      borderRadius: '2px',
      transform: 'translate(-50%, -50%)'
    },
  };

  return (
    <div className="flex-none">
      <header className="border-b border-custom-line" role="banner">
        <div className="max-w-screen-md mx-auto ">
          <div className="flex justify-evenly text-custom-fgcolor p-3 items-center">
            <div className="flex flex-1">
              <Button 
                  variant="icon"
                  ariaLabel="About the game"
                  onClick={openModal} 
                  title="About the game"
                  className="px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm"
              >
                <AiOutlineInfoCircle style={{fontSize: '25px'}}/>
              </Button>
            </div>
            <h1 className="text-3xl font-bold flex-grow text-center flex-2 text-slate-50" alt="Heardle Tamil">Heardle தமிழ்</h1>
            <div className="flex flex-1 justify-end">
              <Button 
                  variant="icon"
                  ariaLabel="How to play"
                  // onClick={openHowToPlay} 
                  title="How to play"
                  className="px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm"
              >
                <RiQuestionLine style={{fontSize: '25px'}}/>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div className="text-slate-50">I am a modal</div>
      </Modal>
    </div>
  )
}

export default Header