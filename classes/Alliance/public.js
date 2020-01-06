'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./allianceHelper')

function _all(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/`)
}
function _one(dataPack, allianceID) {
  return _makePublicGet(dataPack, `${basePath}/${allianceID}`)
}
function _memberCorps(dataPack, allianceID) {
  return _makePublicGet(dataPack, `${basePath}/${allianceID}/corporations/`)
}
function _images(dataPack, allianceID) {
  return _makePublicGet(dataPack, `${basePath}/${allianceID}/icons/`)
}

module.exports = { _all, _one, _memberCorps, _images }