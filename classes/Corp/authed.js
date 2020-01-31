'use strict'

const { _makeAuthedGet, _makeAuthedPost } = require('../Core')
const { basePath } = require('./corpHelper')

function _assets(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/assets/`, toonID)
}
function _assetLocations(dataPack, corporationID, itemArray, toonID) {
  return _makeAuthedPost(dataPack, `${basePath}/${corporationID}/assets/locations/`, JSON.stringify(itemArray), toonID)
}
function _assetNames(dataPack, corporationID, itemArray, toonID) {
  return _makeAuthedPost(dataPack, `${basePath}/${corporationID}/assets/names/`, JSON.stringify(itemArray), toonID)
}
function _blueprints(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/blueprints/`, toonID)
}
function _bookmarks(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/bookmarks/`, toonID)
}
function _bookmarkFolders(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/bookmarks/folders/`, toonID)
}
function _contacts(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/contacts/`, toonID)
}
function _contactLabels(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/contacts/labels/`, toonID)
}
function _containers(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/containers/logs/`, toonID)
}
function _contracts(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/contracts/`, toonID)
}
function _contractBids(dataPack, corporationID, contractID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/contracts/${contractID}/bids/`, toonID)
}
function _contractItems(dataPack, corporationID, contractID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/contracts/${contractID}/items/`, toonID)
}
function _divisions(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/divisions/`, toonID)
}
function _facilities(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/facilities/`, toonID)
}
function _factionWarfare(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/fw/stats/`, toonID)
}
function _medals(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/medals/`, toonID)
}
function _medalsIssued(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/medals/issued/`, toonID)
}
function _members(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/members/`, toonID)
}
function _memberLimit(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/members/limit/`, toonID)
}
function _memberTitles(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/members/titles/`, toonID)
}
function _memberTracking(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/memberTracking/`, toonID)
}
function _roles(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/roles/`, toonID)
}
function _rolesHistory(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/roles/history/`, toonID)
}
function _roles(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/roles/`, toonID)
}
function _shareholders(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/shareholders/`, toonID)
}
function _standings(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/standings/`, toonID)
}
function _starbases(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/starbases/`, toonID)
}
function _starbases(dataPack, corporationID, starbaseID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/starbases/${starbaseID}`, toonID)
}
function _structures(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/structures/`, toonID)
}
function _titles(dataPack, corporationID, toonID) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/titles/`, toonID)
}

module.exports = {
  _assets,
  _assetLocations,
  _assetNames,
  _blueprints,
  _bookmarks,
  _bookmarkFolders,
  _contacts,
  _contactLabels,
  _containers,
  _contracts,
  _contractBids,
  _contractItems,
  _divisions,
  _facilities,
  _factionWarfare,
  _medals,
  _medalsIssued,
  _members,
  _memberLimit,
  _memberTitles,
  _memberTracking,
  _roles,
  _rolesHistory,
  _roles,
  _shareholders,
  _standings,
  _starbases,
  _starbases,
  _structures,
  _titles
}