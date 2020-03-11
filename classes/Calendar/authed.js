'use strict'

const { _makeAuthedGet, _makeAuthedPut } = require('../Core')
const { basePath, subPath } = require('./calendarHelper')

function _all(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/${subPath}/`, toonID, extraParams)
}
function _one(dataPack, characterID, eventID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/${subPath}/${eventID}/`, toonID, extraParams)
}
function _attendees(dataPack, characterID, eventID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/${subPath}/${eventID}/attendees/`, toonID, extraParams)
}
function _respond(dataPack, characterID, eventID, response, toonID, extraParams) {
  if (!response.match(/accepted|declined|tentative/)) {
    throw new Error('response must be accepted, declined, or tentative')
  } else {
    return _makeAuthedPut(dataPack, `${rootPath}/${characterID}/${basePath}/${eventID}/`, JSON.stringify({response}), toonID, extraParams)
  }
}

module.exports = { _all, _one, _attendees, _respond }