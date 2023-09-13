import './styles.css';
import Board from './components/Board';
import Header from './components/Header';
import Player from './components/Player';
import { useState } from 'react';

function App() {

  const [playerXWins, setPlayerXWins] = useState(0);
  const [playerOWins, setPlayerOWins] = useState(0);

  return (
    <>
    <Header/>
    <Player whichPlayer='X' wins={playerXWins}/>
    <Player whichPlayer='O'wins={playerOWins}/>
    <Board playerXWins={playerXWins} playerOWins={playerOWins} setPlayerOWins={setPlayerOWins} setPlayerXWins={setPlayerXWins}/>
    </>
  );
}

export default App;
