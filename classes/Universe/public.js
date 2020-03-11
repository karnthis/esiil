'use strict'

const { _makePublicGet, _makePublicPost } = require('../Core')
const { basePath } = require('./universeHelper')

function _piSchematics(dataPack, schematicsID, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/schematics/${schematicsID}/`, extraParams)
}
function _name2ID(dataPack, payload = [], extraParams) {
  return _makePublicPost(dataPack, `${basePath}/ids/`, payload, extraParams)
}
// function _id2Name(options = {}, payload = []) {
//   return _makePublicPost(`${basePath}/ids/`, options, payload)
// }

module.exports = { _piSchematics, _name2ID }