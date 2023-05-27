import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import useFormAndValidation from "./hooks/useFormAndValidation";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault()
    onAddPlace(values);
  }

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      submit={isLoading ? "Создание..." : "Создать"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      validForm={isValid}
    >
      <input
        className={`form__item ${!isValid ? "form__input_type_error" : ""}`}
        required
        minLength="2"
        maxLength="30"
        type="text"
        name="name"
        placeholder="Название"
        onInput={handleChange}
        value={values.name || ""}
      />
      <span
        className={`form__input-error ${!isValid ? "form__error_visible" : ""}`}
      >
        {!isValid ? errors.name : ""}
      </span>
      <input
        className={`form__item ${!isValid ? "form__input_type_error" : ""}`}
        required
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        onInput={handleChange}
        value={values.link || ""}
      />
      <span
        className={`form__input-error ${!isValid ? "form__error_visible" : ""}`}
      >
        {!isValid ? errors.link : ""}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
