const Core = require('../libs/Core')

const basePath = 'alliance'

module.exports = class Alliance extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  all() {
    return this.makePublicGet(`${basePath}/`)
  }
  one(alliance_id) {
    return this.makePublicGet(`${basePath}/${alliance_id}`)
  }
  memberCorps(alliance_id) {
    return this.makePublicGet(`${basePath}/${alliance_id}/corporations/`)
  }

  // RESTRICTED

}