const Core = require('../libs/Core')

const basePath = 'characters'

module.exports = class Character extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
    this.contacts = {
      get: function(characterID, toonID) {
        return this._makeAuthedGet(`${basePath}/${characterID}/contacts/`, toonID)
      },
      //TODO complete POST and PUT to support query strings
      post: function(characterID, contactArray, toonID) {
        return this._makeAuthedPost(`${basePath}/${characterID}/contacts/`, JSON.stringify(contactArray), toonID)
      },
      put: function(characterID, contactArray, toonID) {
        return this._makeAuthedPut(`${basePath}/${characterID}/contacts/`, JSON.stringify(contactArray), toonID)
      },
      delete: function(characterID, contactArray, toonID) {
        return this._makeAuthedDelete(`${basePath}/${characterID}/contacts/`, JSON.stringify(contactArray), toonID)
      }
    }
  }

  // PUBLIC
  one(characterID) {
    return this._makePublicGet(`${basePath}/${characterID}/`)
  }
  corpHistory(characterID) {
    return this._makePublicGet(`${basePath}/${characterID}/corporationhistory/`)
  }
  images(characterID) {
    return this._makePublicGet(`${basePath}/${characterID}/portrait/`)
  }
  affiliation(characterIDs) {
    return this._makePublicPost(`${basePath}/affiliation/`, JSON.stringify(characterIDs))
  }

  // RESTRICTED
  assets(characterID, pageNumber, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/assets/`, toonID)
  }
  assetLocations(characterID, itemArray, toonID) {
    return this._makeAuthedPost(`${basePath}/${characterID}/assets/locations/`, JSON.stringify(itemArray), toonID)
  }
  assetNames(characterID, itemArray, toonID) {
    return this._makeAuthedPost(`${basePath}/${characterID}/assets/names/`, JSON.stringify(itemArray), toonID)
  }
  blueprints(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/blueprints/`, toonID)
  }
  bookmarks(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/bookmarks/`, toonID)
  }
  bookmarkFolders(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/bookmarks/folders/`, toonID)
  }
  clones(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/clones/`, toonID)
  }
  contactLabels(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/contacts/labels/`, toonID)
  }
  contracts(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/contracts/`, toonID)
  }
  contractBids(characterID, contractID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/contracts/${contractID}/bids/`, toonID)
  }
  contractItems(characterID, contractID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/contracts/${contractID}/items/`, toonID)
  }
  cspa(characterID, characterArray, toonID) {
    return this._makeAuthedPost(`${basePath}/${characterID}/contracts/`, JSON.stringify(characterArray), toonID)
  }
  factionWarfare(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/fw/stats/`, toonID)
  }
  fatigue(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/fatigue/`, toonID)
  }
  implants(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/implants/`, toonID)
  }
  lp(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/loyalty/points/`, toonID)
  }
  medals(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/medals/`, toonID)
  }
  notifications(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/notifications/`, toonID)
  }
  contactNotifications(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/notifications/contacts/`, toonID)
  }
  opportunities(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/opportunities/`, toonID)
  }
  planets(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/planets/`, toonID)
  }
  research(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/agents_research/`, toonID)
  }
  roles(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/roles/`, toonID)
  }
  search(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/search/`, toonID)
  }
  standings(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/standings/`, toonID)
  }
  stats(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/stats/`, toonID)
  }
  titles(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/titles/`, toonID)
  }
}