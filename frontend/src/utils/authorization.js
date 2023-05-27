export const baseUrl = 'https://auth.nomoreparties.co'

function checkResponse(res) {
  if (res.ok) { return res.json(); }
  else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export function register(email, password) {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password, email })
  })
    .then(checkResponse)
}

export function authorize(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password, email })
  })
    .then(checkResponse)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      }
    })
}

export function getContent(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then(checkResponse)
}