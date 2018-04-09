const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')
const messages = require('./messages')

const app = express()

app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
  const help = `
  <pre>
    Welcome to the Address Book API!

    Use an Authorization header to work with your own data:

    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})

    The following endpoints are available:

    GET /messages
    DELETE /messages/:id
    POST /messages { user, content, portal }
  </pre>
  `

  res.send(help)
})

app.use((req, res, next) => {
  const token = req.get('Authorization')

  if (token) {
    req.token = token
    next()
  } else {
    res.status(403).send({
      error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
    })
  }
})

app.get('/messages', (req, res) => {
  res.send(messages.get(req.token))
})

app.delete('/messages/:id', (req, res) => {
  res.send(messages.remove(req.token, req.params.id))
})

app.post('/messages', bodyParser.json(), (req, res) => {
  const { user, content, portal } = req.body

  if (user && content && portal) {
    res.send(messages.add(req.token, req.body))
  } else {
    res.status(403).send({
      error: 'Please provide both a user and content address'
    })
  }
})

app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port)
})
