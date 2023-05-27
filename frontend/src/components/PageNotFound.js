import React from "react";
import pageNotFound from "../images/404.png"
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className="not-found">
      <h2 className="not-found__title">
        Страница не найдена
      </h2>
      <img className="not-found__image" src={pageNotFound} alt="" />
      <p className="not-found__text">
        Кажется, это место ещё не известно...
      </p>
      <Link className="header__enter" to="/main">На главную</Link>
      <p style={{
        color: 'grey',
        fontSize: 14,
        alignSelf: 'center',
        paddingTop: 100,
      }}><a style={{
        color: 'grey',
        fontSize: 14,
        textDecoration: 'none',
      }} href="https://www.freepik.com/free-vector/404-error-with-landscape-concept-illustration_20602785.htm#query=404&position=3&from_view=search&track=sph">Image by storyset</a> on Freepik</p>
    </div>
  )
}