// import logo from '../assets/tic_tac_toe.svg';
import Logo from './tic_tac_toe';

const Navbar = ({ resetGame, player }) => {
  return (
    <div className='navbar'>
      <div className='brand'>
        <div className='logo-wrapper'>
          <Logo />
        </div>
        <h1>Tic Tac Toe</h1>
      </div>
      <h2>{player}'s turn</h2>
      <button className='btn' onClick={resetGame}>
        Start New Game
      </button>
    </div>
  );
};

export default Navbar;
