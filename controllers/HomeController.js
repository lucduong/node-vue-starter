const service = require('../services')
const moment = require('moment')
/**
 * render index page for action /
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getIndex = (req, res) => {
  const model = {}
  res.render('home/index', model)
}

module.exports = {
  getIndex,
};
