function Card({name, image, onClick}) {
  return (
    <div className="card" onClick={onClick}>
      <img src = {image}></img>
      <p>{name}</p>
    </div>
  );
}

export default Card;
