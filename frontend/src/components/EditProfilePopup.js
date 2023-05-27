import React, { useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import useFormAndValidation from "./hooks/useFormAndValidation";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    resetForm();
    setValues({
      name: currentUser.name,
      about: currentUser.about,
    });
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      submit={isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      validForm={isValid}
    >
      <input
        className={`form__item ${!isValid ? "form__input_type_error" : ""}`}
        required
        minLength="2"
        maxLength="40"
        type="text"
        name="name"
        placeholder="Имя Фамилия"
        value={values.name || ""}
        onInput={handleChange}
      />
      <span
        className={`form__input-error ${!isValid ? "form__error_visible" : ""}`}
      >
        {!isValid ? errors.name : ""}
      </span>
      <input
        className={`form__item ${!isValid ? "form__input_type_error" : ""}`}
        required
        minLength="2"
        maxLength="200"
        type="text"
        name="about"
        placeholder="Вид деятельности"
        value={values.about || ""}
        onInput={handleChange}
      />
      <span
        className={`form__input-error ${!isValid ? "form__error_visible" : ""}`}
      >
        {!isValid ? errors.about : ""}
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
