const Player = () => {
  return (
    <div className="w-full flex flex-col flex-grow relative">
      <div className="max-w-screen-sm w-full mx-auto h-full flex flex-col justify-between overflow-auto">
        <div className="p-3 flex-col items-evenly">
          <div className="p-2 mb-2 border border-custom-mg flex items-center last:mb-0 border-custom-line">
            Success
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
