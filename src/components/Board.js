import Square from "./Square";
import Player from "./Player"
import { useState } from 'react'

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X')

    function handleSquareClick(squareIndex) {
        if(!squares[squareIndex]) {
            const newSquares = [...squares];
            newSquares[squareIndex] = currentPlayer;
            setSquares(newSquares);
            setCurrentPlayer(currentPlayer === 'X' ? 'O': 'X')
        }
    }
  return (
    <div className="board">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

export default Board;
