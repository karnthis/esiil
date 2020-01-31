'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./warHelper')

function _all(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/`)
}
function _one(dataPack, warID) {
  return _makePublicGet(dataPack, `${basePath}/${warID}`)
}
function _killmails(dataPack, warID) {
  return _makePublicGet(dataPack, `${basePath}/${warID}/killmails/`)
}

module.exports = { _all, _one, _killmails }