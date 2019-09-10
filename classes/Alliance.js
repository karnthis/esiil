const Core = require('../libs/Core')

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
  one(alliance_id) {
    return this._makePublicGet(`${basePath}/${alliance_id}`)
  }
  memberCorps(alliance_id) {
    return this._makePublicGet(`${basePath}/${alliance_id}/corporations/`)
  }
  images(alliance_id) {
    return this._makePublicGet(`${basePath}/${alliance_id}/icons/`)
  }

  // RESTRICTED
  contacts(alliance_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${alliance_id}/contacts/labels/`, toonID)
  }
  contactLabels(alliance_id, toonID) {
    return this._makeAuthedGet(`${basePath}/${alliance_id}/contacts/labels/`, toonID)
  }
}