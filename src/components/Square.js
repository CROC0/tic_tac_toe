import cross from '../assets/cross.svg';
import ok from '../assets/ok.svg';

const Square = ({ state, index, makeMove }) => {
  function handleMove() {
    if (state === 0) {
      makeMove(index);
    }
  }

  return (
    <div className='square' onClick={() => handleMove(index)}>
      {state === 1 ? <img src={cross} /> : state === 2 ? <img src={ok} /> : null}
    </div>
  );
};

export default Square;
