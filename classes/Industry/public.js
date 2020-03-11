'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./industryHelper')

function _facilities(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/facilities/`, extraParams)
}
function _systems(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/systems/`, extraParams)
}

module.exports = { _facilities, _systems }