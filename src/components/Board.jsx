import Card from "./Card";

function Board({ pokemon, cardClick}) {
  return (
    <div className="board">
      {pokemon.map(p => (
        <Card name={p.name} image={p.sprites.front_default} key = {p.id}
        onClick = {() => cardClick(p.id)}/>
      ))}
    </div>
  );
}

export default Board;
