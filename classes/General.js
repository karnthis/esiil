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
  lpStore(corporation_id) {
    return this._makePublicGet(`loyalty/stores/${corporation_id}/offers/`)
  }
  oneKillmail(killmail_id, killmail_hash) {
    return this._makePublicGet(`killmails/${killmail_id}/${killmail_hash}/`)
  }
  route(origin_id, destination_id) {
    return this._makePublicGet(`route/${origin_id}/${destination_id}/`)
  }
  seach() {
    return this._makePublicGet(`search/`)
  }
  status() {
    return this._makePublicGet(`status/`)
  }

  // RESTRICTED

}