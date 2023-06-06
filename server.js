require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.PORT) || 3000
mongoose.connection.once('open', () => console.log('Mongo go stupid'))

app.listen(PORT, () => {
    console.log(`We poppin on port ${PORT}`)
})