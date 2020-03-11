'use strict'

const { _makePublicGet, _makePublicPost } = require('../Core')
const { basePath } = require('./characterHelper')


function _one(dataPack, characterID, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/${characterID}/`, extraParams)
}
function _history(dataPack, characterID, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/${characterID}/corporationhistory/`, extraParams)
}
function _images(dataPack, characterID, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/${characterID}/portrait/`, extraParams)
}
function _affiliation(dataPack, characterIDs, extraParams) {
  return _makePublicPost(dataPack, `${basePath}/affiliation/`, characterIDs, extraParams)
}

module.exports = { _one, _history, _images, _affiliation }