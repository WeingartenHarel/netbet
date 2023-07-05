const express = require('express')
const { getLists} = require('./list.controller')
const router = express.Router()
 
// middleware that is specific to this router
//router.use(requireAuth)
router.get('/', getLists)


module.exports = router