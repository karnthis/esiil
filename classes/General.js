const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  incursions() {
    return this.makePublicGet(`incursions/`)
  }
  insurance() {
    return this.makePublicGet(`insurance/prices/`)
  }
  lpStore(corporation_id) {
    return this.makePublicGet(`loyalty/stores/${corporation_id}/offers/`)
  }
  oneKillmail(killmail_id, killmail_hash) {
    return this.makePublicGet(`killmails/${killmail_id}/${killmail_hash}/`)
  }
  route(origin_id, destination_id) {
    return this.makePublicGet(`route/${origin_id}/${destination_id}/`)
  }
  seach() {
    return this.makePublicGet(`search/`)
  }
  status() {
    return this.makePublicGet(`status/`)
  }
  
  // RESTRICTED

}