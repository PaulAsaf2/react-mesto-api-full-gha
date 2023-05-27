import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import useFormAndValidation from "./hooks/useFormAndValidation";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(values);
  }

  useEffect(() => {
    resetForm();
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      submit={isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      validForm={isValid}
    >
      <input
        className={`form__item ${!isValid ? "form__input_type_error" : ""}`}
        required
        type="url"
        name="avatar"
        placeholder="Ссылка на аватар"
        value={values.avatar || ""}
        onInput={handleChange}
      />
      <span
        className={`form__input-error ${!isValid ? "form__error_visible" : ""}`}
      >
        {!isValid ? errors.avatar : ""}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
