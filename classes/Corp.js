const Core = require('../libs/Core')

const basePath = 'corporations'

module.exports = class Corp extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  one(corporation_id) {
    return this._makePublicGet(`${basePath}/${corporation_id}/`)
  }
  allianceHistory(corporation_id) {
    return this._makePublicGet(`${basePath}/${corporation_id}/alliancehistory/`)
  }
  images(corporation_id) {
    return this._makePublicGet(`${basePath}/${corporation_id}/icons/`)
  }
  npc() {
    return this._makePublicGet(`${basePath}/npccorps/`)
  }

  // RESTRICTED
  assets(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/assets/`, toonID)
  }
  assetLocations(corporation_id, itemArray, toonID) {
    return this._makeAuthedPost(`${basePath}/${corporation_id}/assets/locations/`, JSON.stringify(itemArray), toonID)
  }
  assetNames(corporation_id, itemArray, toonID) {
    return this._makeAuthedPost(`${basePath}/${corporation_id}/assets/names/`, JSON.stringify(itemArray), toonID)
  }
  blueprints(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/blueprints/`, toonID)
  }
  bookmarks(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/bookmarks/`, toonID)
  }
  bookmarkFolders(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/bookmarks/folders/`, toonID)
  }
  contacts(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/contacts/`, toonID)
  }
  contactLabels(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/contacts/labels/`, toonID)
  }
  containers(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/containers/logs/`, toonID)
  }
  contracts(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/contracts/`, toonID)
  }
  contractBids(corporation_id, contract_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/contracts/${contract_id}/bids/`, toonID)
  }
  contractItems(corporation_id, contract_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/contracts/${contract_id}/items/`, toonID)
  }
  divisions(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/divisions/`, toonID)
  }
  facilities(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/facilities/`, toonID)
  }
  factionWarfare(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/fw/stats/`, toonID)
  }
  medals(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/medals/`, toonID)
  }
  medalsIssued(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/medals/issued/`, toonID)
  }
  members(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/members/`, toonID)
  }
  memberLimit(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/members/limit/`, toonID)
  }
  memberTitles(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/members/titles/`, toonID)
  }
  memberTracking(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/memberTracking/`, toonID)
  }
  roles(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/roles/`, toonID)
  }
  rolesHistory(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/roles/history/`, toonID)
  }
  roles(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/roles/`, toonID)
  }
  shareholders(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/shareholders/`, toonID)
  }
  standings(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/standings/`, toonID)
  }
  starbases(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/starbases/`, toonID)
  }
  starbases(corporation_id, starbase_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/starbases/${starbase_id}`, toonID)
  }
  structures(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/structures/`, toonID)
  }
  titles(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/titles/`, toonID)
  }
  

}