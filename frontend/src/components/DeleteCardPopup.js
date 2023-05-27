import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ isOpen, onClose, cardId, onCardDelete, isLoading }) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(cardId);
  }

  return (
    <PopupWithForm
      name="delete-card"
      title="Вы уверены?"
      submit={isLoading ? "Удаление..." : "Да"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      validForm={true}
    />
  );
}

export default DeleteCardPopup;
