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
  oneAttribute(attribute_id) {
    return this._makePublicGet(`dogma/attributes/${attribute_id}/`)
  }
  dynamic(type_id, item_id) {
    return this._makePublicGet(`dogma/dynamic/items/${type_id}/${item_id}/`)
  }
  allEffects() {
    return this._makePublicGet(`dogma/effects/`)
  }
  oneEffect(effect_id) {
    return this._makePublicGet(`dogma/effects/${effect_id}/`)
  }

  // RESTRICTED

}