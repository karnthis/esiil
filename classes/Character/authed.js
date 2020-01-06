'use strict'

const { _makeAuthedGet } = require('../Core')
const { basePath } = require('./characterHelper')

function _assets(dataPack, characterID, pageNumber, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/assets/`, toonID)
}
function _assetLocations(dataPack, characterID, itemArray, toonID) {
  return _makeAuthedPost(dataPack, `${basePath}/${characterID}/assets/locations/`, itemArray, toonID)
}
function _assetNames(dataPack, characterID, itemArray, toonID) {
  return _makeAuthedPost(dataPack, `${basePath}/${characterID}/assets/names/`, itemArray, toonID)
}
function _blueprints(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/blueprints/`, toonID)
}
function _bookmarks(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/bookmarks/`, toonID)
}
function _bookmarkFolders(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/bookmarks/folders/`, toonID)
}
function _clones(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/clones/`, toonID)
}
function _contactLabels(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/contacts/labels/`, toonID)
}
function _contracts(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/contracts/`, toonID)
}
function _contractBids(dataPack, characterID, contractID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/contracts/${contractID}/bids/`, toonID)
}
function _contractItems(dataPack, characterID, contractID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/contracts/${contractID}/items/`, toonID)
}
function _cspa(dataPack, characterID, characterArray, toonID) {
  return _makeAuthedPost(dataPack, `${basePath}/${characterID}/contracts/`, characterArray, toonID)
}
function _factionWarfare(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/fw/stats/`, toonID)
}
function _fatigue(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/fatigue/`, toonID)
}
function _implants(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/implants/`, toonID)
}
function _lp(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/loyalty/points/`, toonID)
}
function _medals(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/medals/`, toonID)
}
function _notifications(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/notifications/`, toonID)
}
function _contactNotifications(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/notifications/contacts/`, toonID)
}
function _opportunities(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/opportunities/`, toonID)
}
function _planets(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/planets/`, toonID)
}
function _research(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/agents_research/`, toonID)
}
function _roles(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/roles/`, toonID)
}
function _search(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/search/`, toonID)
}
function _standings(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/standings/`, toonID)
}
function _stats(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/stats/`, toonID)
}
function _titles(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/titles/`, toonID)
}

function _getContacts(dataPack, characterID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${characterID}/contacts/`, toonID)
}
//TODO complete POST PUT and DELETE to support query strings
function _postContacts(dataPack, characterID, contactArray, toonID) {
  return _makeAuthedPost(dataPack, `${basePath}/${characterID}/contacts/`, contactArray, toonID)
}
function _putContacts(dataPack, characterID, contactArray, toonID) {
  return _makeAuthedPut(dataPack, `${basePath}/${characterID}/contacts/`, contactArray, toonID)
}
function _deleteContacts(dataPack, characterID, contactArray, toonID) {
  return _makeAuthedDelete(dataPack, `${basePath}/${characterID}/contacts/`, contactArray, toonID)
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