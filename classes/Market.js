const Core = require('../libs/Core')

const basePath = 'markets'

module.exports = class Market extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  history(regionID) {
    return this._makePublicGet(`${basePath}/${regionID}/history/`)
  }
  orders(regionID, extras) {
    return this._makePublicGet(`${basePath}/${regionID}/orders/`, extras)
  }
  types(regionID) {
    return this._makePublicGet(`${basePath}/${regionID}/types/`)
  }
  groups() {
    return this._makePublicGet(`${basePath}/groups/`)
  }
  group(market_groupID) {
    return this._makePublicGet(`${basePath}/groups/${market_groupID}/`)
  }
  prices() {
    return this._makePublicGet(`${basePath}/prices/`)
  }

  // RESTRICTED

}