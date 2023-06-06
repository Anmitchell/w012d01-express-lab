const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY

// schema is the blue print for how data is presented
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

// next is used to access the next function
// event listener for user schema (pre)
  // every time you save the user listener checks and see
  // if you modified the password
  // hash the new password before it saves to the database
userSchema.pre('save', async function(next) { 
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password + secret, 8)
    }
    next()
})

// methods add additional methods
// generate token for user
userSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({_id: this._id}, secret)
    return token
}

const User = mongoose.model('User', userSchema)

module.exports = User

