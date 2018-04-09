const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  messages: [
    {
      id: 1,
      user: 'Ryan Florence',
      content: 'ryan@reacttraining.com',
      portal: 'p1'
    },
    {
      id: 2,
      user: 'Michael Jackson',
      content: 'michael@reacttraining.com',
      portal: 'p1'
    },
    {
      id: 3,
      user: 'Tyler McGinnis',
      content: 'tyler@reacttraining.com',
      portal: 'p1'
    }
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, message) => {
  if (!message.id) {
    message.id = Math.random().toString(36).substr(-8);
  }

  get(token).messages.push(message)

  return message
}

const remove = (token, id) => {
  const data = get(token)
  const message = data.messages.find(m => m.id === id)

  if (message) {
    data.messages = data.messages.filter(m => m !== message)
  }

  return { message }
}

module.exports = {
  get,
  add,
  remove
}
