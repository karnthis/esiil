'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./marketHelper')

function _history(dataPack, regionID, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/${regionID}/history/`, extraParams)
}
function _orders(dataPack, regionID, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/${regionID}/orders/`, extraParams)
}
function _types(dataPack, regionID, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/${regionID}/types/`, extraParams)
}
function _groups(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/groups/`, extraParams)
}
function _group(dataPack, marketGroupID, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/groups/${marketGroupID}/`, extraParams)
}
function _prices(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/prices/`, extraParams)
}

module.exports = { _history, _orders, _types, _groups, _group, _prices }