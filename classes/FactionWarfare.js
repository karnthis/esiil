const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  fwFactionLeaderboard() {
    return this._makePublicGet(`fw/leaderboards/`)
  }
  fwCharacterLeaderboard() {
    return this._makePublicGet(`fw/leaderboards/characters/`)
  }
  fwCorporationLeaderboard() {
    return this._makePublicGet(`fw/leaderboards/corporations/`)
  }
  fwStats() {
    return this._makePublicGet(`fw/stats/`)
  }
  fwSystems() {
    return this._makePublicGet(`fw/systems/`)
  }
  fwWars() {
    return this._makePublicGet(`fw/wars/`)
  }

  // RESTRICTED

}