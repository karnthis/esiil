'use strict'

const { _makePublicGet } = require('../Core')
const {  } = require('./generalHelper')

function _incursions(dataPack, extraParams) {
  return _makePublicGet(dataPack, `incursions/`, extraParams)
}
function _insurance(dataPack, extraParams) {
  return _makePublicGet(dataPack, `insurance/prices/`, extraParams)
}
function _lpStore(dataPack, corporationID, extraParams) {
  return _makePublicGet(dataPack, `loyalty/stores/${corporationID}/offers/`, extraParams)
}
function _oneKillmail(dataPack, killmailID, killmailHash, extraParams) {
  return _makePublicGet(dataPack, `killmails/${killmailID}/${killmailHash}/`, extraParams)
}
function _route(dataPack, originID, destinationID, extraParams) {
  return _makePublicGet(dataPack, `route/${originID}/${destinationID}/`, extraParams)
}
function _search(dataPack, extraParams) {
  return _makePublicGet(dataPack, `search/`, extraParams)
}
function _status(dataPack, extraParams) {
  return _makePublicGet(dataPack, `status/`, extraParams)
}

module.exports = { _incursions, _insurance, _lpStore, _oneKillmail, _route, _search, _status }