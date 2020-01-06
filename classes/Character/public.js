'use strict'

const { _makePublicGet, _makePublicPost } = require('../Core')
const { basePath } = require('./characterHelper')


function _one(dataPack, characterID) {
  return _makePublicGet(dataPack, `${basePath}/${characterID}/`)
}
function _history(dataPack, characterID) {
  return _makePublicGet(dataPack, `${basePath}/${characterID}/corporationhistory/`)
}
function _images(dataPack, characterID) {
  return _makePublicGet(dataPack, `${basePath}/${characterID}/portrait/`)
}
function _affiliation(dataPack, characterIDs) {
  return _makePublicPost(dataPack, `${basePath}/affiliation/`, characterIDs)
}

module.exports = { _one, _history, _images, _affiliation }