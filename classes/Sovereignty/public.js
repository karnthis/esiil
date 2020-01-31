'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./sovereigntyHelper')

function _campaigns(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/campaigns/`)
}
function _map(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/map/`)
}
function _structures(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/structures/`)
}

module.exports = { _campaigns, _map, _structures }