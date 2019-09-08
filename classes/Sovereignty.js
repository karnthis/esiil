const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  sovereigntyCampaigns() {
    return this._makePublicGet(`sovereignty/campaigns/`)
  }
  sovereigntyMap() {
    return this._makePublicGet(`sovereignty/map/`)
  }
  sovereigntyStructures() {
    return this._makePublicGet(`sovereignty/structures/`)
  }

  // RESTRICTED

}