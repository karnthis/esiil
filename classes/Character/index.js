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

  assets(authenticatedToon) {
    return authFuncs._assets(this.dataPack(), authenticatedToon, '', authenticatedToon)
  }
  assetLocations(authenticatedToon, items) {
    return authFuncs._assetLocations(this.dataPack(), authenticatedToon, items, authenticatedToon)
  }
  assetNames(authenticatedToon, items) {
    return authFuncs._assetNames(this.dataPack(), authenticatedToon, items, authenticatedToon)
  }
  blueprints(authenticatedToon) {
    return authFuncs._blueprints(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  bookmarks(authenticatedToon) {
    return authFuncs._bookmarks(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  bookmarkFolders(authenticatedToon) {
    return authFuncs._bookmarkFolders(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  clones(authenticatedToon) {
    return authFuncs._clones(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  contactLabels(authenticatedToon) {
    return authFuncs._contactLabels(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  contracts(authenticatedToon) {
    return authFuncs._contracts(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  contractBids(authenticatedToon, contract) {
    return authFuncs._contractBids(this.dataPack(), authenticatedToon, contract, authenticatedToon)
  }
  contractItems(authenticatedToon, contract) {
    return authFuncs._contractItems(this.dataPack(), authenticatedToon, contract, authenticatedToon)
  }
  cspa(authenticatedToon, characters) {
    return authFuncs._cspa(this.dataPack(), authenticatedToon, characters, authenticatedToon)
  }
  factionWarfare(authenticatedToon) {
    return authFuncs._factionWarfare(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  fatigue(authenticatedToon) {
    return authFuncs._fatigue(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  implants(authenticatedToon) {
    return authFuncs._implants(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  lp(authenticatedToon) {
    return authFuncs._lp(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  medals(authenticatedToon) {
    return authFuncs._medals(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  notifications(authenticatedToon) {
    return authFuncs._notifications(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  contactNotifications(authenticatedToon) {
    return authFuncs._contactNotifications(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  opportunities(authenticatedToon) {
    return authFuncs._opportunities(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  planets(authenticatedToon) {
    return authFuncs._planets(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  research(authenticatedToon) {
    return authFuncs._research(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  roles(authenticatedToon) {
    return authFuncs._roles(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  search(authenticatedToon) {
    return authFuncs._search(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  standings(authenticatedToon) {
    return authFuncs._standings(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  stats(authenticatedToon) {
    return authFuncs._stats(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  titles(authenticatedToon) {
    return authFuncs._titles(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  
  getContacts(authenticatedToon) {
    return authFuncs._getContacts(this.dataPack(), authenticatedToon, authenticatedToon)
  }
  postContacts(authenticatedToon, contacts) {
    return authFuncs._postContacts(this.dataPack(), authenticatedToon, contacts, authenticatedToon)
  }
  putContacts(authenticatedToon, contacts) {
    return authFuncs._putContacts(this.dataPack(), authenticatedToon, contacts, authenticatedToon)
  }
  deleteContacts(authenticatedToon, contacts) {
    return authFuncs._deleteContacts(this.dataPack(), authenticatedToon, contacts, authenticatedToon)
  }
}