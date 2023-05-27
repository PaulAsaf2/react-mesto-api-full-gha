import React from "react";

function PopupWithForm({
  name,
  title,
  submit,
  isOpen,
  onClose,
  onSubmit,
  children,
  validForm,
}) {
  const popup = `popup popup_type_${name}`;

  return (
    <div className={isOpen ? popup + " popup_opened" : popup}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__close"
          type="button"
        ></button>
        <h2
          className={`${name == "delete-card"
            ? "popup__heading_type_delete"
            : "popup__heading"
            }`}
        >
          {title}
        </h2>
        <form className="form" onSubmit={onSubmit} name={name} noValidate>
          <div className="form__input-container">{children}</div>
          <button
            className={`form__button ${!validForm
              ? "form__button_type_disabled"
              : ""
              }`}
            type="submit"
            disabled={validForm ? false : true}
          >
            {submit}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
