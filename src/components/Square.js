const Square = ({ state, index, handleMove, win }) => {
  function startHandleMove() {
    if (state === 0) {
      handleMove(index);
    }
  }

  return (
    <div className={`square ${win && 'winning-square'}`} onClick={startHandleMove}>
      {state === 1 ? <p className='icon'>X</p> : state === 2 ? <p className='icon'>O</p> : null}
    </div>
  );
};

export default Square;
