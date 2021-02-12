const express = require('express')
const dotenv = require('dotenv')

// loading config variables
dotenv.config({ path: './config/config.env'})

// Starting the server
const app = express();

// Enabling static files
app.use(express.static('puclic'))

// Server-side templating engine
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running on port : ${PORT}`)
)

// Setting Routes
// Homepage
const homepagePath = require('./routes/homepage')
app.use('/', homepagePath)

// User-Auth
const userAuthPath = require('./routes/user-auth')
app.use('user-auth', userAuthPath)

// Contact
const contactPath = require('./routes/contact')
app.use('/contact', contactPath)