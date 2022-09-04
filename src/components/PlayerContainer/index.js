import Button from '../Button';
import Autocomplete from '../Autocomplete';
import AsyncSelect from 'react-select/async';
import Player from '../Player';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const PlayerContainer = () => {
  return (
    <>
    <Player/>
    <div className="max-w-screen-sm w-full mx-auto flex-col">
      <div className="m-3 mt-0">
        <div className="autoComplete_wrapper" role="form">
          <AsyncSelect
            menuPlacement="top"
            // cacheOptions
            // components={{
            //     DropdownIndicator: () => null,
            //     IndicatorSeparator: () => null
            // }}
            noOptionsMessage={({ inputValue }) => !inputValue.trim() ? "You must enter at least 3 characters to search" : "There were no results"}
            placeholder="Know it? Search for the artist/title"
            // loadOptions={loadOptions}
            // value={selectedSong}
            // blurInputOnSelect={true}
            // inputProps={{ 'aria-labelledby': 'react-select-2-placeholder' }}
            menuPortalTarget={document.body}
            // styles={{
            //     menuPortal: base => ({ ...base, zIndex: 9999 }),
            //     placeholder: base => ({ ...base, color: "black" }),
            //     noOptionsMessage: base => ({ ...base, color: "red" }),
            //     loadingMessage: base => ({ ...base, color: "black" }),
            // }}
            styles={customStyles}
            defaultOptions={options}
            onChange={() => {}} 
          />
        </div>
        <div className="flex justify-between pt-3">
          <Button 
            variant="secondary"
            type="submit"
            className="px-2 py-2 uppercase tracking-widest bg-custom-mg border-none flex items-center font-semibold text-sm rounded"
            onClick={() => {}}
          >
            Skip
          </Button>
          <Button 
            variant="primary"
            type="submit"
            className="px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm rounded"
            onClick={() => {}}
          >
            Submit
          </Button>
          {/* {
              openedStep < songConfig.breaks.length - 1 &&
              <button className="px-2 py-2 uppercase tracking-widest bg-custom-mg border-none flex items-center font-semibold text-sm rounded"
                  type="submit"
                  onClick={onSkipClicked}>
                  Forward
              </button>
          } */}
          {/* {
              openedStep === songConfig.breaks.length - 1 &&
              <button className="px-2 py-2 uppercase tracking-widest bg-custom-mg border-none flex items-center font-semibold text-sm rounded"
                  type="submit"
                  onClick={onFinishClicked}>
                  Finish it
              </button>
          } */}
          {/* {
              openedStep < songConfig.breaks.length &&
              <button className="px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm rounded bg-custom-positive"
                  type="submit"
                  onClick={onSendClicked}>
                  Submit
              </button>
          } */}
      </div>
      </div>
    </div>
    </>
  )
}

export default PlayerContainer;