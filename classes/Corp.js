const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  corp(corporation_id) {
    return this.makePublicGet(`corporations/${corporation_id}/`)
  }
  corpAllianceHistory(corporation_id) {
    return this.makePublicGet(`corporations/${corporation_id}/alliancehistory/`)
  }
  //TODO	better name
  allNPCCorps() {
    return this.makePublicGet(`corporations/npccorps/`)
  }

  // RESTRICTED

}