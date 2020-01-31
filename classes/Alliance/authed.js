'use strict'

const { _makeAuthedGet } = require('../Core')
const { basePath } = require('./allianceHelper')

function _contacts(dataPack, allianceID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${allianceID}/contacts/labels/`, toonID)
}
function _contactLabels(dataPack, allianceID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${allianceID}/contacts/labels/`, toonID)
}

module.exports = { _contacts, _contactLabels }