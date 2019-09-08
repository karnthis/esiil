const Core = require('../libs/Core')

const basePath = 'corporations'

module.exports = class Corp extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  one(corporation_id) {
    return this.makePublicGet(`${basePath}/${corporation_id}/`)
  }
  allianceHistory(corporation_id) {
    return this.makePublicGet(`${basePath}/${corporation_id}/alliancehistory/`)
  }
  images(corporation_id) {
    return this.makePublicGet(`${basePath}/${corporation_id}/icons/`)
  }
  npcs() {
    return this.makePublicGet(`${basePath}/npccorps/`)
  }

  // RESTRICTED

}