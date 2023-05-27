import React, { useState } from "react";
import { Link } from 'react-router-dom'
import useFormAndValidation from "./hooks/useFormAndValidation";

export default function Register({ onRegister }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const [submitButton, setSubmitButton] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    onRegister(email, password);
  };

  function handleSubmitButton(e) {
    e && setSubmitButton(true)
  }

  return (
    <>
      <div className="enter">
        <h2 className="enter__heading">Регистрация</h2>
        <form
          className="form"
          name="register"
          noValidate
        >
          <input
            id="email"
            className={
              `enter__input ${!isValid ? "enter__input-error" : ""}`
            }
            required
            type="email"
            name="email"
            placeholder="Email"
            onInput={handleChange}
            onChange={handleSubmitButton}
            value={values.email || ""}
          />
          <span className={
            `form__input-error ${!isValid ? "form__error_visible" : ""}`
          }>
            {!isValid ? errors.email : ""}
          </span>
          <input
            id="password"
            className={
              `enter__input ${!isValid ? "enter__input-error" : ""}`
            }
            required
            minLength="2"
            maxLength="40"
            type="password"
            name="password"
            placeholder="Пароль"
            onInput={handleChange}
            onChange={handleSubmitButton}
            value={values.password || ""}
          />
          <span className={
            `form__input-error ${!isValid ? "form__error_visible" : ""}`
          }>
            {!isValid ? errors.password : ""}
          </span>
          <button
            className={
              `enter__submit ${!isValid || !submitButton
                ? 'enter__submit_type_disabled'
                : ''}`
            }
            type="submit"
            onClick={handleSubmit}>
            Зарегистрироваться
          </button>
        </form>
        <p className="enter__question">
          Уже зарегистрированы?{" "}
          <Link
            to='/sign-in'
            className="enter__question enter__link"
          >
            Войти
          </Link>
        </p>
      </div>
    </>
  );
}