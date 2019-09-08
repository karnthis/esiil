const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  fwFactionLeaderboard() {
    return this.makePublicGet(`fw/leaderboards/`)
  }
  fwCharacterLeaderboard() {
    return this.makePublicGet(`fw/leaderboards/characters/`)
  }
  fwCorporationLeaderboard() {
    return this.makePublicGet(`fw/leaderboards/corporations/`)
  }
  fwStats() {
    return this.makePublicGet(`fw/stats/`)
  }
  fwSystems() {
    return this.makePublicGet(`fw/systems/`)
  }
  fwWars() {
    return this.makePublicGet(`fw/wars/`)
  }

  // RESTRICTED

}