import { error } from './get/error.js'
import { index } from './get/index.js'

// Example POST
//import { registerUser } from './post/registerUser.js'

// GET
exports.index = (req, res) => index(req, res)
exports.error = (req, res) => error(req, res)

// POST
//exports.registerUser = (req, res) => registerUser(req, res)
