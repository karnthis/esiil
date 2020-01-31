'use strict'

const { _makePublicGet, _makePublicPost } = require('../Core')
const { basePath } = require('./universeHelper')

function _piSchematics(dataPack, schematicsID) {
  return _makePublicGet(dataPack, `${basePath}/schematics/${schematicsID}/`)
}
function _name2ID(dataPack, payload = []) {
  return _makePublicPost(dataPack, `${basePath}/ids/`, payload)
}
// function _id2Name(options = {}, payload = []) {
//   return _makePublicPost(`${basePath}/ids/`, options, payload)
// }

module.exports = { _piSchematics, _name2ID }