/**
 * Copyright © 2016 LTV Co., Ltd. All Rights Reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by luc <luc@ltv.vn> on Jan 25, 2017
 */
const async = require('async')
const crypto = require('crypto')
const passport = require('passport')
const util = require('util')
const User = require('../models/User')
const { ROOT, SIGN_IN, SIGN_OUT } = require('../constants').URLS

/**
 * GET /signin
 * SignIn page.
 */
exports.getSignIn = (req, res) => {
  if (req.user) {
    return res.redirect('/')
  }
  res.render('auth/signIn', {
    title: 'Sign In'
  })
}

/**
 * POST /login
 * Sign in using email and password.
 */
exports.postSignIn = async (req, res, next) => {
  req.assert('username', 'Username or Email cannot be blank').notEmpty()
  req.assert('password', 'Password cannot be blank').notEmpty()
  if (!!req.body.email) {
    req.sanitize('email').normalizeEmail({ remove_dots: false })
  }

  const result = await req.getValidationResult()

  if (!result.isEmpty()) {
    const errors = result.array()
    req.flash('errors', errors)
    return res.redirect(SIGN_IN)
  }

  passport.authenticate('local', (err, user, info) => {
    console.log(`authenticate: `, err, `, user: `, user, `, info: `, info)
    if (err) {
      return next(err)
    }
    if (!user) {
      req.flash('errors', info)
      return res.redirect(SIGN_IN)
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err)
      }
      req.flash('success', { msg: 'Success! You are logged in.' })
      res.redirect(req.session.returnTo || ROOT)
    })
  })(req, res, next)
}

/**
 * GET /signOut
 * Sign out.
 */
exports.signOut = (req, res) => {
  req.logout()
  res.redirect(ROOT)
}

/**
 * GET /signup
 * Signup page.
 */
exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect(ROOT)
  }
  res.render('auth/signUp', {
    title: 'Create Account'
  })
}
