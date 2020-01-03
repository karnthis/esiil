'use strict'

const Core = require('../Core')

const { _one, _history, _images, _affiliation } = require('./public')
const authFuncs = require('./authed')

module.exports = class Character extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  one(input) {
    return _one(this.dataPack(), input)
  }
  history(input) {
    return _history(this.dataPack(), input)
  }
  images(input) {
    return _images(this.dataPack(), input)
  }
  affiliation(input) {
    return _affiliation(this.dataPack(), input)
  }

  assets(toon) {
    return authFuncs._assets(this.dataPack(), toon, '', toon)
  }
  assetLocations(toon, items) {
    return authFuncs._assetLocations(this.dataPack(), toon, items, toon)
  }
  assetNames(toon, items) {
    return authFuncs._assetNames(this.dataPack(), toon, items, toon)
  }
  blueprints(toon) {
    return authFuncs._blueprints(this.dataPack(), toon, toon)
  }
  bookmarks(toon) {
    return authFuncs._bookmarks(this.dataPack(), toon, toon)
  }
  bookmarkFolders(toon) {
    return authFuncs._bookmarkFolders(this.dataPack(), toon, toon)
  }
  clones(toon) {
    return authFuncs._clones(this.dataPack(), toon, toon)
  }
  contactLabels(toon) {
    return authFuncs._contactLabels(this.dataPack(), toon, toon)
  }
  contracts(toon) {
    return authFuncs._contracts(this.dataPack(), toon, toon)
  }
  contractBids(toon, contract) {
    return authFuncs._contractBids(this.dataPack(), toon, contract, toon)
  }
  contractItems(toon, contract) {
    return authFuncs._contractItems(this.dataPack(), toon, contract, toon)
  }
  cspa(toon, characters) {
    return authFuncs._cspa(this.dataPack(), toon, characters, toon)
  }
  factionWarfare(toon) {
    return authFuncs._factionWarfare(this.dataPack(), toon, toon)
  }
  fatigue(toon) {
    return authFuncs._fatigue(this.dataPack(), toon, toon)
  }
  implants(toon) {
    return authFuncs._implants(this.dataPack(), toon, toon)
  }
  lp(toon) {
    return authFuncs._lp(this.dataPack(), toon, toon)
  }
  medals(toon) {
    return authFuncs._medals(this.dataPack(), toon, toon)
  }
  notifications(toon) {
    return authFuncs._notifications(this.dataPack(), toon, toon)
  }
  contactNotifications(toon) {
    return authFuncs._contactNotifications(this.dataPack(), toon, toon)
  }
  opportunities(toon) {
    return authFuncs._opportunities(this.dataPack(), toon, toon)
  }
  planets(toon) {
    return authFuncs._planets(this.dataPack(), toon, toon)
  }
  research(toon) {
    return authFuncs._research(this.dataPack(), toon, toon)
  }
  roles(toon) {
    return authFuncs._roles(this.dataPack(), toon, toon)
  }
  search(toon) {
    return authFuncs._search(this.dataPack(), toon, toon)
  }
  standings(toon) {
    return authFuncs._standings(this.dataPack(), toon, toon)
  }
  stats(toon) {
    return authFuncs._stats(this.dataPack(), toon, toon)
  }
  titles(toon) {
    return authFuncs._titles(this.dataPack(), toon, toon)
  }
  
  getContacts(toon) {
    return authFuncs._getContacts(this.dataPack(), toon, toon)
  }
  postContacts(toon, contacts) {
    return authFuncs._postContacts(this.dataPack(), toon, contacts, toon)
  }
  putContacts(toon, contacts) {
    return authFuncs._putContacts(this.dataPack(), toon, contacts, toon)
  }
  deleteContacts(toon, contacts) {
    return authFuncs._deleteContacts(this.dataPack(), toon, contacts, toon)
  }
}