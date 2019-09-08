const Core = require('../libs/Core')

const basePath = 'characters'

module.exports = class Character extends Core {
  constructor(cfg = {}) {
    // cfg == { base, ver, src, agent, db, clientID, clientSecret }
    super(cfg)
  }

  // PUBLIC
  one(character_id) {
    return this.makePublicGet(`${basePath}/${character_id}/`)
  }
  corpHistory(character_id) {
    return this.makePublicGet(`${basePath}/${character_id}/corporationhistory/`)
  }
  // TODO	make post
  characterzz(character_id) {
    return this.makePublicGet(`${basePath}/${character_id}/`)
  }

  // RESTRICTED
  medals(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/medals/`, toonID)
  }
  contracts(character_id, toonID) {
    return this.makeAuthedGet(`${basePath}/${character_id}/contracts/`, toonID)
  }

}