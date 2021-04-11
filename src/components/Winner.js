import { useStoreActions } from 'easy-peasy';
import Fireworks from './Fireworks';

const Winner = ({ winner }) => {
  const { resetGame } = useStoreActions((store) => store);
  return (
    <div className='winner'>
      <h2 className='winner-title'>Congratulations:</h2>
      <h2 className='winner-sub-title'>{winner}</h2>
      <button className='btn' onClick={resetGame}>
        Reset
      </button>
      {winner && <Fireworks />}
    </div>
  );
};

export default Winner;
