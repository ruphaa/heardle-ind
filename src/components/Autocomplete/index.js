import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import ReactAutocomplete from 'react-autocomplete';
import './index.css';

const Autocomplete = (props) => {
  const [ value, setValue ] = useState('');

  return (
    <div className="autocomplete-wrapper">
      <AiOutlineSearch className="icon" style={{'--icon-color': '#A7A7A7'}}/>
      <ReactAutocomplete
          items={[
            { id: 'foo', label: 'foo' },
            { id: 'bar', label: 'bar' },
            { id: 'baz', label: 'baz' },
          ]}
          shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={item => item.label}
          renderItem={(item, highlighted) =>
            <div
              key={item.id}
              className="menu-item"
              style={{ backgroundColor: highlighted ? 'var(--input-border-color)' : 'transparent'}}
            >
              {item.label}
            </div>
          }
          value={value}
          onChange={e => setValue(e.target.value )}
          onSelect={value => setValue(value)}
          inputProps={{
            placeholder: 'Know it? Search for the artist/title',
          }}
          menuStyle={{
            background: '#000',
            padding: '2px 0',
            fontSize: '90%',
            overflow: 'auto',
            position: 'absolute',
            left: 0,
            width: '100%',
            border: '1px solid var(--input-focus-color)',
            borderTopWidth: '0'
          }}
          style={{
            backgroundColor: 'pink'
          }}
          wrapperStyle={{
            width: '100%',
          }}
        />
        {
          value
          ? <CgClose className="icon" style={{'--icon-color': '#fff'}}/>
          : null
        }
      </div>
  )
};

export default Autocomplete;