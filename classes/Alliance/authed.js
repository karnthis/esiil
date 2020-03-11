'use strict'

const { _makeAuthedGet } = require('../Core')
const { basePath } = require('./allianceHelper')

function _contacts(dataPack, allianceID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${allianceID}/contacts/labels/`, toonID, extraParams)
}
function _contactLabels(dataPack, allianceID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${allianceID}/contacts/labels/`, toonID, extraParams)
}

module.exports = { _contacts, _contactLabels }