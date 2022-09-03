import './index.css';
import { CgClose } from 'react-icons/cg';
import { BsCheckLg } from 'react-icons/bs';


const ListItem = ({result}) => {
  return (
    <div className="list-item">
      <div className="result">
        {
          result === 'positive'
          ? <BsCheckLg style={{color: '#1ED760'}}/>
          : <CgClose style={{color: '#E91429', fontSize: '20px'}}/>
          
        }
      </div>
      <div className="song-name">
        Radiohead - High and Dry
      </div>
    </div>
  )
}

export default ListItem;