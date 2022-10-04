const Card = (props) => {
  return (
    <div className="card">
      <div>
        <p className="card-text">{props.children}</p>
      </div>
    </div>
  );
};

export default Card;
