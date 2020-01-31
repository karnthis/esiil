'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./contractHelper')

function _allInRegion(dataPack, regionID) {
  return _makePublicGet(dataPack, `${basePath}/${regionID}/`)
}
function _oneBids(dataPack, contractID) {
  return _makePublicGet(dataPack, `${basePath}/bids/${contractID}/`)
}
function _oneItems(dataPack, contractID) {
  return _makePublicGet(dataPack, `${basePath}/items/${contractID}/`)
}

module.exports = { _allInRegion, _oneBids, _oneItems }