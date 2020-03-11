'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./sovereigntyHelper')

function _campaigns(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/campaigns/`, extraParams)
}
function _map(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/map/`, extraParams)
}
function _structures(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/structures/`, extraParams)
}

module.exports = { _campaigns, _map, _structures }