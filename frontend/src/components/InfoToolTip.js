import React from "react";
import succes from "../images/succes.svg";
import error from '../images/error.svg';

function InfoToolTip({ isOpen, onClose, enter, attention }) {

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ''}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__close"
          type="button"
        ></button>
        <img
          className="enter__iqon"
          src={enter ? succes : error}
        />
        <h2 className="enter__title">{attention}</h2>
      </div>
    </div>
  );
}

export default InfoToolTip;
