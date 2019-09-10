const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  factionLeaderboard() {
    return this._makePublicGet(`fw/leaderboards/`)
  }
  characterLeaderboard() {
    return this._makePublicGet(`fw/leaderboards/characters/`)
  }
  corporationLeaderboard() {
    return this._makePublicGet(`fw/leaderboards/corporations/`)
  }
  stats() {
    return this._makePublicGet(`fw/stats/`)
  }
  systems() {
    return this._makePublicGet(`fw/systems/`)
  }
  wars() {
    return this._makePublicGet(`fw/wars/`)
  }

  // RESTRICTED

}