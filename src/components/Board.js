import { useStoreState, useStoreActions } from 'easy-peasy';

import Square from './Square';

const Board = () => {
  const { game } = useStoreState((store) => store);
  const { makeMove, changePlayer, checkWinner } = useStoreActions((store) => store);

  function handleMove(i) {
    makeMove(i);
    changePlayer();
    checkWinner();
  }

  return (
    <>
      <div className='board'>
        {game &&
          game.boardState.map((state, index) => (
            <Square
              key={`square_${index}`}
              state={state}
              index={index}
              handleMove={handleMove}
              win={game.winCondition.includes(index)}
            />
          ))}
      </div>
    </>
  );
};

export default Board;
