'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./marketHelper')

function _history(dataPack, regionID) {
  return _makePublicGet(dataPack, `${basePath}/${regionID}/history/`)
}
function _orders(dataPack, regionID, extras) {
  return _makePublicGet(dataPack, `${basePath}/${regionID}/orders/`, extras)
}
function _types(dataPack, regionID) {
  return _makePublicGet(dataPack, `${basePath}/${regionID}/types/`)
}
function _groups(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/groups/`)
}
function _group(dataPack, market_groupID) {
  return _makePublicGet(dataPack, `${basePath}/groups/${market_groupID}/`)
}
function _prices(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/prices/`)
}

module.exports = { _history, _orders, _types, _groups, _group, _prices }