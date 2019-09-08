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
  bookmarks(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/bookmarks/`, toonID)
  }
  bookmarkFolders(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/bookmarks/folders/`, toonID)
  }
  clones(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/clones/`, toonID)
  }
  contracts(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/contracts/`, toonID)
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
  opportunities(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/opportunities/`, toonID)
  }
  planets(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/planets/`, toonID)
  }
  seach(character_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${character_id}/search/`, toonID)
  }
}