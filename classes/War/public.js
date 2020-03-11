'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./warHelper')

function _all(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/`, extraParams)
}
function _one(dataPack, warID, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/${warID}`, extraParams)
}
function _killmails(dataPack, warID, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/${warID}/killmails/`, extraParams)
}

module.exports = { _all, _one, _killmails }