import { useStoreState, useStoreActions } from 'easy-peasy';
import Board from './Board';
import Winner from './Winner';
import Navbar from './Navbar';
import Info from './Info';

function Game() {
  const { game } = useStoreState((store) => store);
  const { resetGame } = useStoreActions((store) => store);

  function numberToName(number) {
    if (number === 1) {
      return 'playerOne';
    } else if (number === 2) {
      return 'playerTwo';
    }
  }

  return (
    <div className='app'>
      <Navbar player={game[numberToName(game.player)].name} resetGame={resetGame} />

      <div className='game'>
        <Info player={game.playerOne} />

        <Board />

        <Info player={game.playerTwo} />
      </div>

      {!game.activeGame && <Winner winner={game[numberToName(game.winner)].name} />}
    </div>
  );
}

export default Game;
