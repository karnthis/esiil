const Core = require('../libs/Core')

const basePath = 'markets'

module.exports = class Market extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  history(region_id) {
    return this._makePublicGet(`${basePath}/${region_id}/history/`)
  }
  orders(region_id, extras) {
    return this._makePublicGet(`${basePath}/${region_id}/orders/`, extras)
  }
  types(region_id) {
    return this._makePublicGet(`${basePath}/${region_id}/types/`)
  }
  groups() {
    return this._makePublicGet(`${basePath}/groups/`)
  }
  group(market_group_id) {
    return this._makePublicGet(`${basePath}/groups/${market_group_id}/`)
  }
  prices() {
    return this._makePublicGet(`${basePath}/prices/`)
  }

  // RESTRICTED

}