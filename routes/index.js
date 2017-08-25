const express = require('express')
const router = express.Router()
const moment = require('moment')
const mime = require('mime')

const {
  SIGN_IN,
  SIGN_OUT
} = require('../constants').URLS
const {
  mkdirSync
} = require('../helpers')
const passportConfig = require('../config/passport')
const RequireAuthenticated = passportConfig.isAuthenticated
const homeController = require('../controllers/HomeController')
const authController = require('../controllers/AuthController')

router.get(SIGN_IN, authController.getSignIn)
router.post(SIGN_IN, authController.postSignIn)
router.get(SIGN_OUT, authController.signOut)

router.use(RequireAuthenticated)
router.get('/', homeController.getIndex)

// API

module.exports = router
