/***********************/
/******* STEP: 2 *******/
/***********************/

require('dotenv').config() // access to MongoDB Atlas Server connection string
const app = require('./app') // express application needed to listen for PORT
const mongoose = require('mongoose') // library needed for mongoose to establish connection with MondoDB database
const PORT = process.env.PORT || 3000

// connects MongoDB database
mongoose.connect(process.env.PORT) || 3000
// Log server when connection is established with MongoDB database
mongoose.connection.once('open', () => console.log('Mongo go stupid'))

// listening out for connection to port
app.listen(PORT, () => {
    console.log(`We poppin on port ${PORT}`)
})