const User = require('../models/user')
const bcrypt = require('brypt')
const jwt = require('jsonwebtoken')

// access token of current user
// verify token

exports.auth = async (req, res, next) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '')
      const data = jwt.verify(token, secret)
      const user = await User.findOne({ _id: data._id })
      if (!user) {
        throw new Error()
      }
      req.user = user // used in exports.deleteUser
      next()
    } catch (error) {
      res.status(401).send('Not authorized')
    }
}

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body) // req.body json?
        await user.save() // saving user object
        const token = await user.generateAuthToken() // create new token for user
        res.json({user, token}) // 
    } catch(error) {
        res.status(400).json({message: error.message})
    }
}

exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email}) // find user in database
        if (!user || !await bcrypt.compare(req.body.password + secret, user.password)) { // is user is not found, or user password is not correct 
            res.status(400).send('Invalid login credentials')
        } else {
            const token = await user.generateAuthToken()
            res.json({user, token})
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}