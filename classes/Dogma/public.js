'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./dogmaHelper')

function _allAttributes(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/attributes/`)
}
function _oneAttribute(dataPack, attributeID) {
  return _makePublicGet(dataPack, `${basePath}/attributes/${attributeID}/`)
}
function _allEffects(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/effects/`)
}
function _oneEffect(dataPack, effectID) {
  return _makePublicGet(dataPack, `${basePath}/effects/${effectID}/`)
}
function _dynamic(dataPack, typeID, itemID) {
  return _makePublicGet(dataPack, `${basePath}/dynamic/items/${typeID}/${itemID}/`)
}


module.exports = { _allAttributes, _oneAttribute, _allEffects, _oneEffect, _dynamic }