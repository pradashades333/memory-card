import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';

function App() {
  return (
    <div>
      <h1>Memory Card Game</h1>
      <ScoreBoard />
      <GameBoard />
    </div>
  );
}

export default App;