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
  war(warID) {
    return this._makePublicGet(`wars/${warID}/`)
  }
  warKillmails(warID) {
    return this._makePublicGet(`wars/${warID}/killmails/`)
  }

  // RESTRICTED

}