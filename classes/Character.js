const Core = require('../libs/Core')

const basePath = 'characters'

module.exports = class Character extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  one(character_id) {
    return this._makePublicGet(`${basePath}/${character_id}/`)
  }
  corpHistory(character_id) {
    return this._makePublicGet(`${basePath}/${character_id}/corporationhistory/`)
  }
  images(character_id) {
    return this._makePublicGet(`${basePath}/${character_id}/portrait/`)
  }
  affiliation(character_ids) {
    return this._makePublicPost(`${basePath}/affiliation/`, JSON.stringify(character_ids))
  }

  // RESTRICTED
  assets(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/assets/`, toonID)
  }
  assetLocations(character_id, itemArray, toonID) {
    return this._makeAuthedPost(`${basePath}/${character_id}/assets/locations/`, JSON.stringify(itemArray), toonID)
  }
  assetNames(character_id, itemArray, toonID) {
    return this._makeAuthedPost(`${basePath}/${character_id}/assets/names/`, JSON.stringify(itemArray), toonID)
  }
  blueprints(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/blueprints/`, toonID)
  }
  bookmarks(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/bookmarks/`, toonID)
  }
  bookmarkFolders(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/bookmarks/folders/`, toonID)
  }
  clones(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/clones/`, toonID)
  }
  contacts = {
    get: function(character_id, toonID) {
      return this._makeAuthedGet(`${basePath}/${character_id}/contacts/`, toonID)
    },
    //TODO complete POST and PUT to support query strings
    post: function(character_id, contactArray, toonID) {
      return this._makeAuthedPost(`${basePath}/${character_id}/contacts/`, JSON.stringify(contactArray), toonID)
    },
    put: function(character_id, contactArray, toonID) {
      return this._makeAuthedPut(`${basePath}/${character_id}/contacts/`, JSON.stringify(contactArray), toonID)
    },
    delete: function(character_id, contactArray, toonID) {
      return this._makeAuthedDelete(`${basePath}/${character_id}/contacts/`, JSON.stringify(contactArray), toonID)
    }
  }
  contactLabels(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/contacts/labels/`, toonID)
  }
  contracts(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/contracts/`, toonID)
  }
  contractBids(character_id, contract_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/contracts/${contract_id}/bids/`, toonID)
  }
  contractItems(character_id, contract_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/contracts/${contract_id}/items/`, toonID)
  }
  cspa(character_id, characterArray, toonID) {
    return this._makeAuthedPost(`${basePath}/${character_id}/contracts/`, JSON.stringify(characterArray), toonID)
  }
  factionWarfare(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/fw/stats/`, toonID)
  }
  fatigue(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/fatigue/`, toonID)
  }
  implants(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/implants/`, toonID)
  }
  lp(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/loyalty/points/`, toonID)
  }
  medals(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/medals/`, toonID)
  }
  notifications(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/notifications/`, toonID)
  }
  contactNotifications(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/notifications/contacts/`, toonID)
  }
  opportunities(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/opportunities/`, toonID)
  }
  planets(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/planets/`, toonID)
  }
  research(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/agents_research/`, toonID)
  }
  roles(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/roles/`, toonID)
  }
  search(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/search/`, toonID)
  }
  standings(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/standings/`, toonID)
  }
  stats(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/stats/`, toonID)
  }
  titles(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/titles/`, toonID)
  }
}