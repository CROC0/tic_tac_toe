import { action, createStore, thunk } from 'easy-peasy';
import { v4 as uuid } from 'uuid';

import {
  actionMakeMove,
  actionChangePlayer,
  thunkCheckWinner,
  actionMakeWinner,
  actionResetGame,
  actionChangeName,
} from './actions';

export default createStore({
  game: {
    id: uuid(),
    playerOne: {
      name: 'Player One',
      wins: 0,
      index: 1,
    },
    playerTwo: {
      name: 'Player Two',
      wins: 0,
      index: 2,
    },

    activeGame: true,
    winner: null,

    boardState: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    player: 1,
    lastStartingPlayer: 2,
  },

  makeMove: action(actionMakeMove),
  changePlayer: action(actionChangePlayer),
  checkWinner: thunk(thunkCheckWinner),
  makeWinner: action(actionMakeWinner),
  resetGame: action(actionResetGame),
  changeName: action(actionChangeName),
});
