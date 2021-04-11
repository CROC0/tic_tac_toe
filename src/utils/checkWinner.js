function checkWinner(state) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const first = state[winConditions[i][0]];
    const second = state[winConditions[i][1]];
    const third = state[winConditions[i][2]];

    if (first === second && second === third && first === third) {
      if (first !== 0) {
        console.log('winner');
        return { winner: first, winCondition: winConditions[i] };
      }
    }
  }

  return { winner: null, winConditions: null };
}

export default checkWinner;
