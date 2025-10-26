import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="container">
        <div className="img-container">
          <img src={props.img}></img>
        </div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default Card;
