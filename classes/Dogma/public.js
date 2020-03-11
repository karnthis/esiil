'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./dogmaHelper')

function _allAttributes(dataPack, extraParameters) {
  return _makePublicGet(dataPack, `${basePath}/attributes/`, extraParameters)
}
function _oneAttribute(dataPack, attributeID, extraParameters) {
  return _makePublicGet(dataPack, `${basePath}/attributes/${attributeID}/`, extraParameters)
}
function _allEffects(dataPack, extraParameters) {
  return _makePublicGet(dataPack, `${basePath}/effects/`, extraParameters)
}
function _oneEffect(dataPack, effectID, extraParameters) {
  return _makePublicGet(dataPack, `${basePath}/effects/${effectID}/`, extraParameters)
}
function _dynamic(dataPack, typeID, itemID, extraParameters) {
  return _makePublicGet(dataPack, `${basePath}/dynamic/items/${typeID}/${itemID}/`, extraParameters)
}


module.exports = { _allAttributes, _oneAttribute, _allEffects, _oneEffect, _dynamic }