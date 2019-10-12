const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  wars() {
    return this._makePublicGet(`wars/`)
  }
  war(war_id) {
    return this._makePublicGet(`wars/${war_id}/`)
  }
  warKillmails(war_id) {
    return this._makePublicGet(`wars/${war_id}/killmails/`)
  }

  // RESTRICTED

}