const api = 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll = () =>
  fetch(`${api}/messages`, { headers })
    .then(res => res.json())
    .then(data => data.messages)

export const remove = (message) =>
  fetch(`${api}/messages/${message.id}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.message)

export const create = (body) =>
  fetch(`${api}/messages`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
