class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._request = this._request.bind(this);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // профиль ----- профиль ----- профиль ----- профиль ----- профиль

  // получает данные профиля
  getProfileData() {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
  }

  // отправляет данные профиля
  setProfileData(data) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  // аватар ----- аватар ----- аватар ----- аватар ----- аватар ----- аватар

  // отправляет данные аватара
  setAvatar(link) {
    return this._request(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(link),
    });
  }

  // карточки ----- карточки ----- карточки ----- карточки ----- карточки

  // получает данные карточек
  getInitialCards() {
    return this._request(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
  }

  // отправляет данные для создания карточки
  createCard(data) {
    return this._request(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  // отправляет данные на удаление карточки
  deleteCard(id) {
    return this._request(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  // лайк ----- лайк ----- лайк ----- лайк ----- лайк ----- лайк ----- лайк

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: this._headers,
      });
    } else {
      return this._request(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: this._headers,
      });
    }
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-60",
  headers: {
    authorization: "b9ad9483-6c42-4e9a-8a8f-d7555df6de20",
    "Content-Type": "application/json",
  },
});
