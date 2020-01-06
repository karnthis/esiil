'use strict'

const Core = require('../Core')

const { _one, _allianceHistory, _images, _npc } = require('./public')
const authFuncs = require('./authed')

module.exports = class Corp extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  one(input) {
    return _one(this.dataPack(), input)
  }
  allianceHistory(input) {
    return _allianceHistory(this.dataPack(), input)
  }
  images(input) {
    return _images(this.dataPack(), input)
  }
  npc() {
    return _npc(this.dataPack())
  }

  assets(corp, toon) {
    return authFuncs._assets(this.dataPack(), corp, toon)
  }
  assetLocations(corp, toon, items) {
    return authFuncs._assetLocations(this.dataPack(), corp, items, toon)
  }
  assetNames(corp, toon, items) {
    return authFuncs._assetNames(this.dataPack(), corp, items, toon)
  }
  blueprints(corp, toon) {
    return authFuncs._blueprints(this.dataPack(), corp, toon)
  }
  bookmarks(corp, toon) {
    return authFuncs._bookmarks(this.dataPack(), corp, toon)
  }
  bookmarkFolders(corp, toon) {
    return authFuncs._bookmarkFolders(this.dataPack(), corp, toon)
  }
  contacts(corp, toon) {
    return authFuncs._contacts(this.dataPack(), corp, toon)
  }
  contractBids(corp, toon, contract) {
    return authFuncs._contractBids(this.dataPack(), corp, contract, toon)
  }
  contractItems(corp, toon, contract) {
    return authFuncs._contractItems(this.dataPack(), corp, contract, toon)
  }
  divisions(corp, toon) {
    return authFuncs._divisions(this.dataPack(), corp, toon)
  }
  facilities(corp, toon) {
    return authFuncs._facilities(this.dataPack(), corp, toon)
  }
  factionWarfare(corp, toon) {
    return authFuncs._factionWarfare(this.dataPack(), corp, toon)
  }
  medals(corp, toon) {
    return authFuncs._medals(this.dataPack(), corp, toon)
  }
  medalsIssued(corp, toon) {
    return authFuncs._medalsIssued(this.dataPack(), corp, toon)
  }
  members(corp, toon) {
    return authFuncs._members(this.dataPack(), corp, toon)
  }
  memberLimit(corp, toon) {
    return authFuncs._memberLimit(this.dataPack(), corp, toon)
  }
  memberTitles(corp, toon) {
    return authFuncs._memberTitles(this.dataPack(), corp, toon)
  }
  memberTracking(corp, toon) {
    return authFuncs._memberTracking(this.dataPack(), corp, toon)
  }
  roles(corp, toon) {
    return authFuncs._roles(this.dataPack(), corp, toon)
  }
  shareholders(corp, toon) {
    return authFuncs._shareholders(this.dataPack(), corp, toon)
  }
  standings(corp, toon) {
    return authFuncs._standings(this.dataPack(), corp, toon)
  }
  starbases(corp, toon, starbase) {
    return authFuncs._starbases(this.dataPack(), corp, starbase, toon)
  }
  structures(corp, toon) {
    return authFuncs._structures(this.dataPack(), corp, toon)
  }
  titles(corp, toon) {
    return authFuncs._titles(this.dataPack(), corp, toon)
  }
}