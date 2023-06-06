const morgan = require('morgan')
const userRoutes = require('.routes/user-routes')
const app = express() // uses express middleware

app.use(express.json()) // built in middleware function in express that parses incoming requests with JSON payloads
app.use(morgan('combined'))
app.use('users', userRoutes)

module.exports = app