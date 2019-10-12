const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  marketHistory(region_id) {
    return this._makePublicGet(`markets/${region_id}/history/`)
  }
  marketOrders(region_id) {
    return this._makePublicGet(`markets/${region_id}/orders/`)
  }
  marketTypes(region_id) {
    return this._makePublicGet(`markets/${region_id}/types/`)
  }
  marketGroups() {
    return this._makePublicGet(`markets/groups/`)
  }
  marketGroup(market_group_id) {
    return this._makePublicGet(`markets/groups/${market_group_id}/`)
  }
  marketPrices() {
    return this._makePublicGet(`markets/prices/`)
  }

  // RESTRICTED

}