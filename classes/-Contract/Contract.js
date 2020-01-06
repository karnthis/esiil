const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  allInRegion(regionID) {
    return this._makePublicGet(`contracts/public/${regionID}/`)
  }
  oneBids(contractID) {
    return this._makePublicGet(`contracts/public/bids/${contractID}/`)
  }
  oneItems(contractID) {
    return this._makePublicGet(`contracts/public/items/${contractID}/`)
  }

  // RESTRICTED

}