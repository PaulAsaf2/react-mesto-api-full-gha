import logoMesto from "../images/logo_Mesto.svg";
import React, { useState } from "react";
import Media from "react-media";
import { Link, useLocation } from 'react-router-dom';
import MenuButton from './MenuButton';

export default function Header({ loggedIn, email, onSignOut }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  };

  return (
    <Media query={{ maxWidth: 500 }}>
      {matches =>
        matches ? (
          <header className="header">
            {
              menuOpen ?
                <>
                  <p className={`header__email ${menuOpen ? 'header__email_open' : ''}`}>
                    {email}
                  </p>
                  <button
                    type="button"
                    className="header__link"
                    onClick={onSignOut}
                  >
                    Выйти
                  </button>
                </>
                : null
            }
            <div className={`header__container ${menuOpen ? 'header__container_open' : ''}`}>
              <img
                className="header__logo"
                src={logoMesto}
                alt="Логотип Место"
              />
              {
                loggedIn ? (
                  <MenuButton
                    open={menuOpen}
                    onClick={handleMenuClick}
                  />
                ) : (
                  <>
                    {pathname === "/sign-in" && <Link to="/sign-up" className="header__enter">Регистрация</Link>}
                    {pathname === "/sign-up" && <Link to="/sign-in" className="header__enter">Войти</Link>}
                  </>
                )
              }
            </div>
          </header>
        ) : (
          <header className="header">
            <img
              className="header__logo"
              src={logoMesto}
              alt="Логотип Место"
            />
            {
              loggedIn
                ? (
                  <div className="header__container">
                    <p className="header__email">
                      {email}
                    </p>
                    <button
                      type="button"
                      className="header__link"
                      onClick={onSignOut}
                    >
                      Выйти
                    </button>
                  </div>
                )
                : (
                  <>
                    {pathname === "/sign-in" && <Link to="/sign-up" className="header__enter">Регистрация</Link>}
                    {pathname === "/sign-up" && <Link to="/sign-in" className="header__enter">Войти</Link>}
                  </>
                )
            }
          </header>
        )
      }
    </Media>
  );
}