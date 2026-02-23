import { useState, useEffect } from 'react';
import Board from './components/Board';
import Score from './components/Score';

function App() {
  const [pokemon, setPokemon] = useState([]);

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

    console.log(id)
  }

  return (
    <div>
      <h1>Memory Card Game</h1>
      <Score/>
      <Board pokemon={pokemon} cardClick={cardClick} />
    </div>
  );
}

export default App;