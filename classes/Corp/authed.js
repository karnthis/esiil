'use strict'

const { _makeAuthedGet, _makeAuthedPost } = require('../Core')
const { basePath } = require('./corpHelper')

function _assets(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/assets/`, toonID, extraParams)
}
function _assetLocations(dataPack, corporationID, itemArray, toonID, extraParams) {
  return _makeAuthedPost(dataPack, `${basePath}/${corporationID}/assets/locations/`, JSON.stringify(itemArray), toonID, extraParams)
}
function _assetNames(dataPack, corporationID, itemArray, toonID, extraParams) {
  return _makeAuthedPost(dataPack, `${basePath}/${corporationID}/assets/names/`, JSON.stringify(itemArray), toonID, extraParams)
}
function _blueprints(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/blueprints/`, toonID, extraParams)
}
function _bookmarks(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/bookmarks/`, toonID, extraParams)
}
function _bookmarkFolders(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/bookmarks/folders/`, toonID, extraParams)
}
function _contacts(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/contacts/`, toonID, extraParams)
}
function _contactLabels(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/contacts/labels/`, toonID, extraParams)
}
function _containers(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/containers/logs/`, toonID, extraParams)
}
function _contracts(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/contracts/`, toonID, extraParams)
}
function _contractBids(dataPack, corporationID, contractID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/contracts/${contractID}/bids/`, toonID, extraParams)
}
function _contractItems(dataPack, corporationID, contractID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/contracts/${contractID}/items/`, toonID, extraParams)
}
function _divisions(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/divisions/`, toonID, extraParams)
}
function _facilities(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/facilities/`, toonID, extraParams)
}
function _factionWarfare(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/fw/stats/`, toonID, extraParams)
}
function _medals(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/medals/`, toonID, extraParams)
}
function _medalsIssued(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/medals/issued/`, toonID, extraParams)
}
function _members(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/members/`, toonID, extraParams)
}
function _memberLimit(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/members/limit/`, toonID, extraParams)
}
function _memberTitles(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/members/titles/`, toonID, extraParams)
}
function _memberTracking(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/memberTracking/`, toonID, extraParams)
}
function _roles(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/roles/`, toonID, extraParams)
}
function _rolesHistory(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/roles/history/`, toonID, extraParams)
}
function _roles(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/roles/`, toonID, extraParams)
}
function _shareholders(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/shareholders/`, toonID, extraParams)
}
function _standings(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/standings/`, toonID, extraParams)
}
function _starbases(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/starbases/`, toonID, extraParams)
}
function _starbases(dataPack, corporationID, starbaseID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/starbases/${starbaseID}`, toonID, extraParams)
}
function _structures(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/structures/`, toonID, extraParams)
}
function _titles(dataPack, corporationID, toonID, extraParams) {
  return _makeAuthedGet(dataPack, `${basePath}/${corporationID}/titles/`, toonID, extraParams)
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