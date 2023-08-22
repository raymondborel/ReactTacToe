import './styles.css';
import Board from './components/Board';
import Header from './components/Header';
import Player from './components/Player';

function App() {
  return (
    <>
    <Header/>
    <Player whichPlayer='x'/>
    <Player whichPlayer='o'/>
    <Board/>
    </>
  );
}

export default App;
