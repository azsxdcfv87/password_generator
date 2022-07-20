const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generatePassword = require('./generate_password.js')
const app = express()
const port = 3000
// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(req.body)
  res.render('index', { password: password, options: options })
})

app.listen(port, () => {
  console.log(`http://localhost:${3000}`)
})