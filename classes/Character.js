const Core = require('../libs/Core')

const basePath = 'characters'

module.exports = class Character extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  one(character_id) {
    return this.makePublicGet(`${basePath}/${character_id}/`)
  }
  corpHistory(character_id) {
    return this.makePublicGet(`${basePath}/${character_id}/corporationhistory/`)
  }
  images(character_id) {
    return this.makePublicGet(`${basePath}/${character_id}/portrait/`)
  }
  // TODO	make post
  xcharacterzz(character_id) {
    return this.makePublicGet(`${basePath}/${character_id}/`)
  }

  // RESTRICTED
  assets(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/assets/`, toonID)
  }
  //TODO make post
  assetLocations(character_id, itemArray, toonID) {
    return this.makeAuthedPost(`${basePath}/${character_id}/assets/locations/`, itemArray, toonID)
  }
  //TODO make post
  assetNames(character_id, itemArray, toonID) {
    return this.makeAuthedPost(`${basePath}/${character_id}/assets/names/`, itemArray, toonID)
  }
  clones(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/clones/`, toonID)
  }
  contracts(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/contracts/`, toonID)
  }
  implants(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/implants/`, toonID)
  }
  lp(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/loyalty/points/`, toonID)
  }
  medals(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/medals/`, toonID)
  }
  opportunities(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/opportunities/`, toonID)
  }
  planets(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/planets/`, toonID)
  }
  seach(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/search/`, toonID)
  }
}