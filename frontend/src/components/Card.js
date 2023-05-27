import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, isOpen }) {
  const user = useContext(CurrentUserContext);
  const isOwn = card.owner._id === user._id;
  const isLiked = card.likes.some((i) => i._id === user._id);

  const cardLikeButtonClassName = `card__like ${
    isLiked && "card__like_active"
  }`;

  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    isOpen(card._id);
  }

  return (
    <article className="card">
      {isOwn && (
        <button
          className="card__trash"
          onClick={handleDeleteClick}
          type="button"
        ></button>
      )}
      <img
        className="card__image"
        onClick={handleClick}
        src={card.link}
        alt={card.name}
      />
      <div className="card__title">
        <h2 className="card__text"> {card.name} </h2>
        <div className="card__like-container">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            type="button"
          ></button>
          <p className="card__like-count"> {card.likes.length} </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
