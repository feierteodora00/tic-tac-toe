import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <h1>TIC-TAC-TOE Game</h1>
        <h2>
          Player 1: X | Player 2: O
        </h2>
        <p>Take turns and play until the game is over</p>
        <Game />
    </div>
  );
}

export default App;
