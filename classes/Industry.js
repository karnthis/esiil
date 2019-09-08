const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  industryFacilities() {
    return this.makePublicGet(`industry/facilities/`)
  }
  industrySystems() {
    return this.makePublicGet(`industry/systems/`)
  }

  // RESTRICTED

}