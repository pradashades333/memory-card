function Card({name, image}) {
  return (
    <div>
      <img src = {image}></img>
      <p>{name}</p>
    </div>
  );
}

export default Card;