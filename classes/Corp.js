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
  npcs() {
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
  bookmarks(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/bookmarks/`, toonID)
  }
  bookmarkFolders(corporation_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${corporation_id}/bookmarks/folders/`, toonID)
  }
}