const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

// Index
router.get('/', userController.showAllUsers)

// New - For views

// Delete
router.delete('/:id', userController.auth, userController.deleteUser)

// Update
router.put('/:id', userController.updateUser)

// Create
router.post('/', userController.createUser)

// Edit - for views

// Show
router.get('/', userController.showUser)

// Login
router.post('/login', userController.loginUser)

// Logout
router.post('/logout', userController.logOutUser)

module.exports = router