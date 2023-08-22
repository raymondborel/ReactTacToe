import './App.css';
import Header from './components/Header';
import Player from './components/Player';

function App() {
  return (
    <>
    <Header/>
    <Player whichPlayer='x'/>
    <Player whichPlayer='o'/>
    </>
  );
}

export default App;
