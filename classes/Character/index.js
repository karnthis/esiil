'use strict'

const Core = require('../Core')

const { _one, _history, _images, _affiliation } = require('./public')
const authFuncs = require('./authed')

module.exports = class Character extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  one(toon, extraParameters) {
    return _one(this.dataPack(), toon, extraParameters)
  }
  history(toon, extraParameters) {
    return _history(this.dataPack(), toon, extraParameters)
  }
  images(toon, extraParameters) {
    return _images(this.dataPack(), toon, extraParameters)
  }
  affiliation(toonsArray, extraParameters) {
    return _affiliation(this.dataPack(), toonsArray, extraParameters)
  }

  assets(authenticatedToon, extraParameters) {
    return authFuncs._assets(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  assetLocations(authenticatedToon, items, extraParameters) {
    return authFuncs._assetLocations(this.dataPack(), authenticatedToon, items, authenticatedToon, extraParameters)
  }
  assetNames(authenticatedToon, items, extraParameters) {
    return authFuncs._assetNames(this.dataPack(), authenticatedToon, items, authenticatedToon, extraParameters)
  }
  blueprints(authenticatedToon, extraParameters) {
    return authFuncs._blueprints(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  bookmarks(authenticatedToon, extraParameters) {
    return authFuncs._bookmarks(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  bookmarkFolders(authenticatedToon, extraParameters) {
    return authFuncs._bookmarkFolders(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  clones(authenticatedToon, extraParameters) {
    return authFuncs._clones(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  contactLabels(authenticatedToon, extraParameters) {
    return authFuncs._contactLabels(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  contracts(authenticatedToon, extraParameters) {
    return authFuncs._contracts(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  contractBids(authenticatedToon, contract, extraParameters) {
    return authFuncs._contractBids(this.dataPack(), authenticatedToon, contract, authenticatedToon, extraParameters)
  }
  contractItems(authenticatedToon, contract, extraParameters) {
    return authFuncs._contractItems(this.dataPack(), authenticatedToon, contract, authenticatedToon, extraParameters)
  }
  cspa(authenticatedToon, toonsArray, extraParameters) {
    return authFuncs._cspa(this.dataPack(), authenticatedToon, toonsArray, authenticatedToon, extraParameters)
  }
  factionWarfare(authenticatedToon, extraParameters) {
    return authFuncs._factionWarfare(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  fatigue(authenticatedToon, extraParameters) {
    return authFuncs._fatigue(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  implants(authenticatedToon, extraParameters) {
    return authFuncs._implants(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  lp(authenticatedToon, extraParameters) {
    return authFuncs._lp(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  medals(authenticatedToon, extraParameters) {
    return authFuncs._medals(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  notifications(authenticatedToon, extraParameters) {
    return authFuncs._notifications(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  contactNotifications(authenticatedToon, extraParameters) {
    return authFuncs._contactNotifications(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  opportunities(authenticatedToon, extraParameters) {
    return authFuncs._opportunities(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  planets(authenticatedToon, extraParameters) {
    return authFuncs._planets(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  research(authenticatedToon, extraParameters) {
    return authFuncs._research(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  roles(authenticatedToon, extraParameters) {
    return authFuncs._roles(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  search(authenticatedToon, extraParameters) {
    return authFuncs._search(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  standings(authenticatedToon, extraParameters) {
    return authFuncs._standings(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  stats(authenticatedToon, extraParameters) {
    return authFuncs._stats(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  titles(authenticatedToon, extraParameters) {
    return authFuncs._titles(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  
  getContacts(authenticatedToon, extraParameters) {
    return authFuncs._getContacts(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  postContacts(authenticatedToon, contacts, extraParameters) {
    return authFuncs._postContacts(this.dataPack(), authenticatedToon, contacts, authenticatedToon, extraParameters)
  }
  putContacts(authenticatedToon, contacts, extraParameters) {
    return authFuncs._putContacts(this.dataPack(), authenticatedToon, contacts, authenticatedToon, extraParameters)
  }
  deleteContacts(authenticatedToon, contacts, extraParameters) {
    return authFuncs._deleteContacts(this.dataPack(), authenticatedToon, contacts, authenticatedToon, extraParameters)
  }
}