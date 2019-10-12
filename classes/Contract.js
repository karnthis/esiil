const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  allInRegion(region_id) {
    return this._makePublicGet(`contracts/public/${region_id}/`)
  }
  oneBids(contract_id) {
    return this._makePublicGet(`contracts/public/bids/${contract_id}/`)
  }
  oneItems(contract_id) {
    return this._makePublicGet(`contracts/public/items/${contract_id}/`)
  }

  // RESTRICTED

}