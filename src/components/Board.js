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

    function newGame() {
        const newSquares = Array(9).fill(null);
        setSquares(newSquares);
        setCurrentPlayer('X');
    }

  return (

    <div> 
        <div className="board">
            {squares.map((value, index) => (
                <Square key={index} value={value} onClick= {() => handleSquareClick(index)} />
            ))}
        </div>
        <div>
            <button onClick={newGame}>New Game</button>
        </div>
    </div>
  );
}

export default Board;
