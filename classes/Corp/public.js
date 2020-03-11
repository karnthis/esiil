'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./corpHelper')

function _one(dataPack, corporationID, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/${corporationID}/`, extraParams)
}
function _allianceHistory(dataPack, corporationID, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/${corporationID}/alliancehistory/`, extraParams)
}
function _images(dataPack, corporationID, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/${corporationID}/icons/`, extraParams)
}
function _npc(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/npccorps/`, extraParams)
}

module.exports = { _one, _allianceHistory, _images, _npc }