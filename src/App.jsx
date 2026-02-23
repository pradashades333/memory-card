import { useState, useEffect } from 'react';
import Board from './components/Board';
import Score from './components/Score';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
      .then(res => res.json())
      .then(data => {
        const fetches = data.results.map(p =>
          fetch(p.url).then(res => res.json())
        );
        return Promise.all(fetches);
      })
      .then(pokemonData => {
        setPokemon(pokemonData);
      });
  }, []);

  return (
    <div>
      <h1>Memory Card Game</h1>
      <Score/>
      <Board pokemon={pokemon} />
    </div>
  );
}

export default App;