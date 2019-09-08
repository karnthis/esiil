const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  sovereigntyCampaigns() {
    return this.makePublicGet(`sovereignty/campaigns/`)
  }
  sovereigntyMap() {
    return this.makePublicGet(`sovereignty/map/`)
  }
  sovereigntyStructures() {
    return this.makePublicGet(`sovereignty/structures/`)
  }

  // RESTRICTED

}