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

const getDownloadHistories = async (req, res) => {
  try {
    const histories = await service.fetchDownloadHistories()
    // console.log(`Download histories: `, histories)
    res.status(200).json({
      today: moment().format('DD-MM-YYYY'),
      histories,
    })
  } catch (err) {
    res.status(500).json(err)
    console.log(`getDownloadHistories: `, err)
  }
}

module.exports = {
  getIndex,
  getDownloadHistories,
};
