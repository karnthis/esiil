const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  incursions() {
    return this._makePublicGet(`incursions/`)
  }
  insurance() {
    return this._makePublicGet(`insurance/prices/`)
  }
  lpStore(corporationID) {
    return this._makePublicGet(`loyalty/stores/${corporationID}/offers/`)
  }
  oneKillmail(killmailID, killmail_hash) {
    return this._makePublicGet(`killmails/${killmailID}/${killmail_hash}/`)
  }
  route(originID, destinationID) {
    return this._makePublicGet(`route/${originID}/${destinationID}/`)
  }
  search() {
    return this._makePublicGet(`search/`)
  }
  status() {
    return this._makePublicGet(`status/`)
  }

  // RESTRICTED

}