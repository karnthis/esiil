'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./corpHelper')

function _one(dataPack, corporationID) {
  return _makePublicGet(dataPack, `${basePath}/${corporationID}/`)
}
function _allianceHistory(dataPack, corporationID) {
  return _makePublicGet(dataPack, `${basePath}/${corporationID}/alliancehistory/`)
}
function _images(dataPack, corporationID) {
  return _makePublicGet(dataPack, `${basePath}/${corporationID}/icons/`)
}
function _npc(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/npccorps/`)
}

module.exports = { _one, _allianceHistory, _images, _npc }