const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  allAttributes() {
    return this._makePublicGet(`dogma/attributes/`)
  }
  oneAttribute(attributeID) {
    return this._makePublicGet(`dogma/attributes/${attributeID}/`)
  }
  dynamic(typeID, itemID) {
    return this._makePublicGet(`dogma/dynamic/items/${typeID}/${itemID}/`)
  }
  allEffects() {
    return this._makePublicGet(`dogma/effects/`)
  }
  oneEffect(effectID) {
    return this._makePublicGet(`dogma/effects/${effectID}/`)
  }

  // RESTRICTED

}