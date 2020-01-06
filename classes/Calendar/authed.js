'use strict'

const { _makeAuthedGet, _makeAuthedPut } = require('../Core')
const { basePath, subPath } = require('./calendarHelper')

function _all(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/${subPath}/`, toonID)
}
function _one(dataPack, characterID, eventID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/${subPath}/${eventID}/`, toonID)
}
function _attendees(dataPack, characterID, eventID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/${subPath}/${eventID}/attendees/`, toonID)
}
function _respond(dataPack, characterID, eventID, response, toonID) {
  if (!response.match(/accepted|declined|tentative/)) {
    throw new Error('response must be accepted, declined, or tentative')
  } else {
    return _makeAuthedPut(dataPack, `${rootPath}/${characterID}/${basePath}/${eventID}/`, JSON.stringify({response}), toonID)
  }
}

module.exports = { _all, _one, _attendees, _respond }