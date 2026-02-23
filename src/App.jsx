import { useState, useEffect } from 'react';
import Board from './components/Board';
import Score from './components/Score';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

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
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const cardClick = (id) => {
    if(clickedCards.includes(id)){
      setScore (0);
      setClickedCards([])
    } else {
      setClickedCards([...clickedCards, id])
      setScore(score+1)
    }

    setPokemon([...pokemon].sort(() => Math.random() - 0.5))
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="app">
      <h1>Memory Card Game</h1>
      <Score/>
      <Board pokemon={pokemon} cardClick={cardClick} />
    </div>
  );
}

export default App;