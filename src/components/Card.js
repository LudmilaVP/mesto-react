function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="element-template">
      <div className="element__item">
        <img
          src={card.link}
          alt={card.name}
          className="element__image"
          onClick={handleClick}
        />
        <div className="element__group">
          <h3 className="element__title">{card.name}</h3>
          <div className="element__group-like">
            <button className="element__like" type="button"></button>
            <p className="element__like_counter">{card.likes.length}</p>
          </div>
        </div>
        <button className="element__delete" type="button"></button>
      </div>
    </div>
  );
}

export default Card;
