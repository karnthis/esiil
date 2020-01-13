'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./industryHelper')

function _facilities(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/facilities/`)
}
function _systems(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/systems/`)
}

module.exports = { _facilities, _systems }