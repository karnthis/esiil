'use strict'

const { _makePublicGet } = require('../Core')
const {  } = require('./generalHelper')

function _incursions(dataPack) {
  return _makePublicGet(dataPack, `incursions/`)
}
function _insurance(dataPack) {
  return _makePublicGet(dataPack, `insurance/prices/`)
}
function _lpStore(dataPack, corporationID) {
  return _makePublicGet(dataPack, `loyalty/stores/${corporationID}/offers/`)
}
function _oneKillmail(dataPack, killmailID, killmailHash) {
  return _makePublicGet(dataPack, `killmails/${killmailID}/${killmailHash}/`)
}
function _route(dataPack, originID, destinationID) {
  return _makePublicGet(dataPack, `route/${originID}/${destinationID}/`)
}
function _search(dataPack) {
  return _makePublicGet(dataPack, `search/`)
}
function _status(dataPack) {
  return _makePublicGet(dataPack, `status/`)
}

module.exports = { _incursions, _insurance, _lpStore, _oneKillmail, _route, _search, _status }