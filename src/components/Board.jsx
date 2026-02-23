function Board({ pokemon }) {
  return (
    <div>
      {pokemon.map(p => (
        <p key={p.id}>{p.name}</p>
      ))}
    </div>
  );
}

export default Board;