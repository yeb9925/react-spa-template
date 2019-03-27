const express = require('express')
const app = express()
const PORT = 8080
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

// Logging Middleware
app.use(morgan('dev'))

// Body-parsing Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Static-File Serving Middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// Sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
});

app.listen(PORT, () => {
  console.log(`Server now listening on port: ${PORT}`)
})
