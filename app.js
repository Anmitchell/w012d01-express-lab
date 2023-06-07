/***********************/
/******* STEP: 1 *******/
/***********************/

const express = require('express') // allows use of express library

const morgan = require('morgan') // allows use of morgan library

// routes are in external file user-routes.js
const userRoutes = require('.routes/user-routes')

const app = express() // creates an express application

// application method with built in middleware function in express that parses incoming requests with JSON payloads (based on body-parser). Returns middleware that only parses JSON.
app.use(express.json()) 

// Morgan gathers logs from the server and prepares them for reading. It also has a few predetermined defaults built-in, saving you the time and effort of having to set up all of the logging yourself.
app.use(morgan('combined'))

// enables use of routes in file user-routes
app.use('users', user-routes)

module.exports = app