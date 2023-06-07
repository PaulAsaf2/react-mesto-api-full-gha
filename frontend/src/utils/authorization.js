// export const baseUrl = 'https://auth.nomoreparties.co'
export const baseUrl = 'http://localhost:3000'

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
  // .then((data) => {
  //   if (data.token) {
  //     localStorage.setItem('token', data.token);
  //     return data;
  //   }
  // })
}

export function getContent(token) {
  return fetch(`${baseUrl}/auth-status`, {
    method: 'GET',
    credentials: 'include',
    headers: { "Content-Type": "application/json" }
  })
    .then(checkResponse)
}
