import Square from "./Square";
import { useState } from 'react'

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameOver, setGameOver] = useState(false);

    function handleSquareClick(squareIndex) {
        if(!gameOver && !squares[squareIndex]) {
            const newSquares = [...squares];
            newSquares[squareIndex] = currentPlayer;

            const winner = checkWinners(newSquares);
            if (!winner) {
                setSquares(newSquares);
                setCurrentPlayer(currentPlayer === 'X' ? 'O': 'X')
            }

            if (winner) {
                setGameOver(true);
            }
        }
    }

    function newGame() {
        const newSquares = Array(9).fill(null);
        setSquares(newSquares);
        setCurrentPlayer('X');
        setGameOver(false);
    }

    function checkWinners(squares) {
        const winningCombos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        for (let i=0; i<winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null
    }

  return (

    <div> 
        <div className="board">
            {squares.map((value, index) => (
                <Square key={index} value={value} onClick= {() => handleSquareClick(index)} disabled ={gameOver}/>
                
            ))}
        </div>
        <div className="button">
            <button onClick={newGame}>New Game</button>
        </div>
    </div>
  );
}

export default Board;
