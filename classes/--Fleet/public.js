'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./fleetHelper')

function _all(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/`)
}


module.exports = { _all }