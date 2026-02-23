import Card from "./Card";

function Board({ pokemon, }) {
  return (
    <div>
      {pokemon.map(p => (
        <Card name={p.name} image={p.sprites.front_default} key = {p.id}/>
      ))}
    </div>
  );
}

export default Board;