function Score({score, bestScore}) {
  return (
    <div className="score">
      <p>Score: <strong>{score}</strong></p>
      <p>Best: <strong>{bestScore}</strong></p>
    </div>
  );
}

export default Score;