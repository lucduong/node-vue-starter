const fs = require('fs')
const moment = require('moment')
const chalk = require('chalk')
const _ = require('lodash')
const path = require('path')

/**
 * 
 * @param msg {string} the message wants to show
 * @param type {int} [0: yellow, 1: green, 2: red, 3: blue]
 */
const log = (msg, type) => {
  type = type || 0
  const _msg = `[${moment().format('YYYY-MM-DD HH:mm:ss')}]\n > ${msg}\n`
  const cmds = [
    chalk.yellow(_msg),
    `${chalk.green('✓')} ${chalk.green(_msg)}`,
    `${chalk.red('✗')} ${chalk.red(_msg)}`,
    chalk.blue(_msg)
  ]
  console.log(cmds[type])
}

const mkdirSync = (path) => {
  try {
    fs.mkdirSync(path)
  } catch (e) {
    if (e.code != 'EEXIST') throw e
  }
}

const newArray = (len) => {
  const res = []
  for (let i = 0; i < len; i++) {
    res.push('')
  }
  return res
}

module.exports = {
  mkdirSync,
  log,
}
