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

<<<<<<< HEAD
export default Board;
=======
export default Board;
>>>>>>> 5e481b5 (added score and total score)
