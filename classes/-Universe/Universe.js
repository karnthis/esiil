const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  piSchematics(schematicsID) {
    return this._makePublicGet(`universe/schematics/${schematicsID}/`)
  }
  id2Name(options = {}, payload = []) {
    return this.publicPost(`universe/ids/`, options, JSON.stringify(payload))
  }

  // RESTRICTED

}