import checkWinner from '../utils/checkWinner';

export function actionResetGame(state) {
  state.game.boardState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  state.game.activeGame = true;
  state.game.player = state.game.lastStartingPlayer;
  state.game.lastStartingPlayer = state.game.lastStartingPlayer === 1 ? 2 : 1;
}

export function actionMakeWinner(state, winner) {
  state.game.winner = winner;
  let player = winner === 1 ? 'playerOne' : 'playerTwo';

  state.game.activeGame = false;

  state.game[player].wins += 1;
}

export function thunkCheckWinner(actions, _, helpers) {
  const { game } = helpers.getState();
  if (!game.activeGame) return;

  const winningPlayer = checkWinner(game.boardState);

  if (winningPlayer) {
    actions.makeWinner(winningPlayer);
  }
}

export function actionMakeMove(state, i) {
  if (!state.game.activeGame) return;

  const tmpState = state.game.boardState;
  tmpState[i] = state.game.player;

  state.game.boardState = tmpState;
}

export function actionChangePlayer(state) {
  state.game.player = state.game.player === 1 ? 2 : 1;
}

export function actionChangeName(state, payload) {
  if (payload.player.index === 1) {
    state.game.playerOne.name = payload.name;
  } else {
    state.game.playerTwo.name = payload.name;
  }
}
