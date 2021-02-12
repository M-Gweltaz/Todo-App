const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('user-auth')
})

module.exports = router