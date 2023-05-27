import React from "react";

function ImagePopup({ name, card, onClose }) {
  const popup = `popup popup_type_${name}`;

  return (
    <div className={card.link != "" ? popup + " popup_opened" : popup}>
      <figure className="popup__image-container">
        <button
          className="popup__close"
          onClick={onClose}
          type="button"
        ></button>
        <img
          className="popup__image"
          src={card.link}
          alt={card.name}
        />
        <figcaption className="popup__caption"> {card.name} </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;