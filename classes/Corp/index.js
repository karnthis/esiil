'use strict'

const Core = require('../Core')

const { _one, _allianceHistory, _images, _npc } = require('./public')
const authFuncs = require('./authed')

module.exports = class Corp extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  one(corporationID, extraParameters) {
    return _one(this.dataPack(), corporationID, extraParameters)
  }
  allianceHistory(corporationID, extraParameters) {
    return _allianceHistory(this.dataPack(), corporationID, extraParameters)
  }
  images(corporationID, extraParameters) {
    return _images(this.dataPack(), corporationID, extraParameters)
  }
  npc(extraParameters) {
    return _npc(this.dataPack(), extraParameters)
  }

  assets(corp, authenticatedToon, extraParameters) {
    return authFuncs._assets(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  assetLocations(corp, authenticatedToon, items) {
    return authFuncs._assetLocations(this.dataPack(), corp, items, authenticatedToon, extraParameters)
  }
  assetNames(corp, authenticatedToon, items) {
    return authFuncs._assetNames(this.dataPack(), corp, items, authenticatedToon, extraParameters)
  }
  blueprints(corp, authenticatedToon, extraParameters) {
    return authFuncs._blueprints(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  bookmarks(corp, authenticatedToon, extraParameters) {
    return authFuncs._bookmarks(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  bookmarkFolders(corp, authenticatedToon, extraParameters) {
    return authFuncs._bookmarkFolders(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  contacts(corp, authenticatedToon, extraParameters) {
    return authFuncs._contacts(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  contractBids(corp, authenticatedToon, contract, extraParameters) {
    return authFuncs._contractBids(this.dataPack(), corp, contract, authenticatedToon, extraParameters)
  }
  contractItems(corp, authenticatedToon, contract, extraParameters) {
    return authFuncs._contractItems(this.dataPack(), corp, contract, authenticatedToon, extraParameters)
  }
  divisions(corp, authenticatedToon, extraParameters) {
    return authFuncs._divisions(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  facilities(corp, authenticatedToon, extraParameters) {
    return authFuncs._facilities(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  factionWarfare(corp, authenticatedToon, extraParameters) {
    return authFuncs._factionWarfare(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  medals(corp, authenticatedToon, extraParameters) {
    return authFuncs._medals(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  medalsIssued(corp, authenticatedToon, extraParameters) {
    return authFuncs._medalsIssued(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  members(corp, authenticatedToon, extraParameters) {
    return authFuncs._members(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  memberLimit(corp, authenticatedToon, extraParameters) {
    return authFuncs._memberLimit(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  memberTitles(corp, authenticatedToon, extraParameters) {
    return authFuncs._memberTitles(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  memberTracking(corp, authenticatedToon, extraParameters) {
    return authFuncs._memberTracking(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  roles(corp, authenticatedToon, extraParameters) {
    return authFuncs._roles(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  shareholders(corp, authenticatedToon, extraParameters) {
    return authFuncs._shareholders(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  standings(corp, authenticatedToon, extraParameters) {
    return authFuncs._standings(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  starbases(corp, authenticatedToon, starbase, extraParameters) {
    return authFuncs._starbases(this.dataPack(), corp, starbase, authenticatedToon, extraParameters)
  }
  structures(corp, authenticatedToon, extraParameters) {
    return authFuncs._structures(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
  titles(corp, authenticatedToon, extraParameters) {
    return authFuncs._titles(this.dataPack(), corp, authenticatedToon, extraParameters)
  }
}