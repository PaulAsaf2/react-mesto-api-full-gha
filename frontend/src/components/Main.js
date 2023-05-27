import React, { useContext } from "react";
import {
  CurrentUserContext, CardsContext,
} from "../contexts/CurrentUserContext.js";
import Card from "./Card.js";

function Main(props) {
  const user = useContext(CurrentUserContext);
  const cards = useContext(CardsContext);

  return (
    <>
      <main className="content">
        <section className="profile">
          <img
            className="profile__avatar"
            src={user.avatar}
            alt={user.avatar}
          />
          <button
            onClick={props.onEditAvatar}
            className="profile__avatar profile__avatar_edit"
            type="button"
          ></button>
          <div className="profile__container">
            <h1 className="profile__name"> {user.name} </h1>
            <button
              onClick={props.onEditProfile}
              className="profile__edit"
              type="button"
            ></button>
          </div>
          <p className="profile__activity"> {user.about} </p>
          <button
            onClick={props.onAddPlace}
            className="profile__add"
            type="button"
          ></button>
        </section>

        <section aria-label="Изображения пользователя" className="images">
          {cards.map((item) => {
            return (
              <Card
                key={item._id}
                card={item}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                isOpen={props.isOpenDeleteCardPopup}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Main;
