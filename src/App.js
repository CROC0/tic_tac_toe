import { useState } from 'react';
import Board from './components/Board';

import checkWinner from './utils/checkWinner';

const startingGameState = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function App() {
  const [state, setState] = useState({
    gameState: startingGameState,
    player: 1,
    winner: 0,
    lastStartingPlayer: 1,
  });

  function checkGameWinner(gameState) {
    const winningPlayer = checkWinner(gameState);

    if (winningPlayer) {
      setState({
        ...state,
        winner: winningPlayer,
      });
    } else {
      setState({
        ...state,
        player: state.player === 1 ? 2 : 1,
      });
    }
  }

  function makeMove(i) {
    if (state.winner !== 0) return;
    const tmpState = state.gameState;
    tmpState[i] = state.player;
    console.log(tmpState);
    setState({
      ...state,
      gameState: tmpState,
    });

    checkGameWinner(tmpState);
  }

  function resetGame() {}

  return (
    <div className='App'>
      <Board state={state} makeMove={makeMove} />
    </div>
  );
}

export default App;
