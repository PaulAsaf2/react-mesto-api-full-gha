export const baseUrl = 'https://image.api.nomoredomains.rocks'
// export const baseUrl = 'http://localhost:3000'

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
    body: JSON.stringify({ email, password })
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
    .then((data) => {
      localStorage.setItem('LoginStatus', data.logged);
      return data;
    })
}
