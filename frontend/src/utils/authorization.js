export const baseUrl = 'http://image.api.nomoredomains.rocks'

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
    credentials: 'include',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
    .then(checkResponse)
}

export function authStatus() {
  return fetch(`${baseUrl}/auth-status`, {
    method: 'GET',
    credentials: 'include',
    headers: { "Content-Type": "application/json" }
  })
    .then(checkResponse)
}

export function logout() {
  return fetch(`${baseUrl}/logout`, {
    method: 'GET',
    credentials: 'include',
    headers: { "Content-Type": "application/json" }
  })
    .then(checkResponse)
}
