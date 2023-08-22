import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Player from './components/Player';
import Square from './components/Square';

function App() {
  return (
    <>
    <Header/>
    <Player whichPlayer='x'/>
    <Player whichPlayer='o'/>
    <Board/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    <Square/>
    </>
  );
}

export default App;
