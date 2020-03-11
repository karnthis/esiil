'use strict'

const { _makeAuthedGet } = require('../Core')
const { basePath } = require('./characterHelper')

function _assets(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/assets/`, toonID, extraParams)
}
function _assetLocations(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedPost(dataPack, `${basePath}/${characterID}/assets/locations/`, toonID, extraParams)
}
function _assetNames(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedPost(dataPack, `${basePath}/${characterID}/assets/names/`, toonID, extraParams)
}
function _blueprints(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/blueprints/`, toonID, extraParams)
}
function _bookmarks(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/bookmarks/`, toonID, extraParams)
}
function _bookmarkFolders(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/bookmarks/folders/`, toonID, extraParams)
}
function _clones(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/clones/`, toonID, extraParams)
}
function _contactLabels(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/contacts/labels/`, toonID, extraParams)
}
function _contracts(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/contracts/`, toonID, extraParams)
}
function _contractBids(dataPack, characterID, contractID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/contracts/${contractID}/bids/`, toonID, extraParams)
}
function _contractItems(dataPack, characterID, contractID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/contracts/${contractID}/items/`, toonID, extraParams)
}
function _cspa(dataPack, characterID, characterArray, toonID, extraParams) {
  return _makeAuthedPost(dataPack, `${basePath}/${characterID}/contracts/`, characterArray, toonID, extraParams)
}
function _factionWarfare(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/fw/stats/`, toonID, extraParams)
}
function _fatigue(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/fatigue/`, toonID, extraParams)
}
function _implants(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/implants/`, toonID, extraParams)
}
function _lp(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/loyalty/points/`, toonID, extraParams)
}
function _medals(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/medals/`, toonID, extraParams)
}
function _notifications(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/notifications/`, toonID, extraParams)
}
function _contactNotifications(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/notifications/contacts/`, toonID, extraParams)
}
function _opportunities(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/opportunities/`, toonID, extraParams)
}
function _planets(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/planets/`, toonID, extraParams)
}
function _research(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/agents_research/`, toonID, extraParams)
}
function _roles(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/roles/`, toonID, extraParams)
}
function _search(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/search/`, toonID, extraParams)
}
function _standings(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/standings/`, toonID, extraParams)
}
function _stats(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/stats/`, toonID, extraParams)
}
function _titles(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/titles/`, toonID, extraParams)
}

function _getContacts(dataPack, characterID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/contacts/`, toonID, extraParams)
}
//TODO complete POST PUT and DELETE to support query strings
function _postContacts(dataPack, characterID, contactArray, toonID, extraParams) {
  return _makeAuthedPost(dataPack, `${basePath}/${characterID}/contacts/`, contactArray, toonID, extraParams)
}
function _putContacts(dataPack, characterID, contactArray, toonID, extraParams) {
  return _makeAuthedPut(dataPack, `${basePath}/${characterID}/contacts/`, contactArray, toonID, extraParams)
}
function _deleteContacts(dataPack, characterID, contactArray, toonID, extraParams) {
  return _makeAuthedDelete(dataPack, `${basePath}/${characterID}/contacts/`, contactArray, toonID, extraParams)
}

module.exports = {
  _assets,
  _assetLocations,
  _assetNames,
  _blueprints,
  _bookmarks,
  _bookmarkFolders,
  _clones,
  _contactLabels,
  _contracts,
  _contractBids,
  _contractItems,
  _cspa,
  _factionWarfare,
  _fatigue,
  _implants,
  _lp,
  _medals,
  _notifications,
  _contactNotifications,
  _opportunities,
  _planets,
  _research,
  _roles,
  _search,
  _standings,
  _stats,
  _titles,
  _getContacts,
  _postContacts,
  _putContacts,
  _deleteContacts
}