const Core = require('../Core')

const basePath = 'alliance'

module.exports = class Alliance extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  all() {
    return this._makePublicGet(`${basePath}/`)
  }
  one(allianceID) {
    return this._makePublicGet(`${basePath}/${allianceID}`)
  }
  memberCorps(allianceID) {
    return this._makePublicGet(`${basePath}/${allianceID}/corporations/`)
  }
  images(allianceID) {
    return this._makePublicGet(`${basePath}/${allianceID}/icons/`)
  }

  // RESTRICTED
  contacts(allianceID, toonID) {
    return this._makeAuthedGet(`${basePath}/${allianceID}/contacts/labels/`, toonID)
  }
  contactLabels(allianceID, toonID) {
    return this._makeAuthedGet(`${basePath}/${allianceID}/contacts/labels/`, toonID)
  }
}