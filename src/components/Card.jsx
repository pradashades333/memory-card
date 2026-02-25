function Card({name, image, onClick}) {
  return (
    <div className="card" onClick={onClick}>
      <img src = {image}></img>
      <p>{name}</p>
    </div>
  );
}

<<<<<<< HEAD
export default Card;
=======
export default Card;
>>>>>>> 5e481b5 (added score and total score)
