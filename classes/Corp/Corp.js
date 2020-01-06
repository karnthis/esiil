const Core = require('../libs/Core')

const basePath = 'corporations'

module.exports = class Corp extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  one(corporationID) {
    return this._makePublicGet(`${basePath}/${corporationID}/`)
  }
  allianceHistory(corporationID) {
    return this._makePublicGet(`${basePath}/${corporationID}/alliancehistory/`)
  }
  images(corporationID) {
    return this._makePublicGet(`${basePath}/${corporationID}/icons/`)
  }
  npc() {
    return this._makePublicGet(`${basePath}/npccorps/`)
  }

  // RESTRICTED
  assets(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/assets/`, toonID)
  }
  assetLocations(corporationID, itemArray, toonID) {
    return this._makeAuthedPost(`${basePath}/${corporationID}/assets/locations/`, JSON.stringify(itemArray), toonID)
  }
  assetNames(corporationID, itemArray, toonID) {
    return this._makeAuthedPost(`${basePath}/${corporationID}/assets/names/`, JSON.stringify(itemArray), toonID)
  }
  blueprints(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/blueprints/`, toonID)
  }
  bookmarks(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/bookmarks/`, toonID)
  }
  bookmarkFolders(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/bookmarks/folders/`, toonID)
  }
  contacts(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/contacts/`, toonID)
  }
  contactLabels(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/contacts/labels/`, toonID)
  }
  containers(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/containers/logs/`, toonID)
  }
  contracts(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/contracts/`, toonID)
  }
  contractBids(corporationID, contractID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/contracts/${contractID}/bids/`, toonID)
  }
  contractItems(corporationID, contractID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/contracts/${contractID}/items/`, toonID)
  }
  divisions(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/divisions/`, toonID)
  }
  facilities(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/facilities/`, toonID)
  }
  factionWarfare(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/fw/stats/`, toonID)
  }
  medals(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/medals/`, toonID)
  }
  medalsIssued(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/medals/issued/`, toonID)
  }
  members(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/members/`, toonID)
  }
  memberLimit(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/members/limit/`, toonID)
  }
  memberTitles(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/members/titles/`, toonID)
  }
  memberTracking(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/memberTracking/`, toonID)
  }
  roles(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/roles/`, toonID)
  }
  rolesHistory(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/roles/history/`, toonID)
  }
  roles(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/roles/`, toonID)
  }
  shareholders(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/shareholders/`, toonID)
  }
  standings(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/standings/`, toonID)
  }
  starbases(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/starbases/`, toonID)
  }
  starbases(corporationID, starbaseID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/starbases/${starbaseID}`, toonID)
  }
  structures(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/structures/`, toonID)
  }
  titles(corporationID, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporationID}/titles/`, toonID)
  }
  

}