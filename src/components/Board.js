import Square from './Square';

const Board = ({ state: { gameState }, makeMove }) => {
  console.log(gameState);
  return (
    <div className='board'>
      {gameState &&
        gameState.map((state, index) => (
          <Square key={`square_${index}`} state={state} index={index} makeMove={makeMove} />
        ))}
    </div>
  );
};

export default Board;
