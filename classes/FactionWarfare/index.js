'use strict'

const Core = require('../Core')

const { _factionLeaderboard, _characterLeaderboard, _corporationLeaderboard, _stats, _systems, _wars } = require('./public')
const {  } = require('./authed')

module.exports = class FactionWarfare extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  factionLeaderboard(extraParameters) {
    return _factionLeaderboard(this.dataPack(), extraParameters)
  }
  characterLeaderboard(extraParameters) {
    return _characterLeaderboard(this.dataPack(), extraParameters)
  }
  corporationLeaderboard(extraParameters) {
    return _corporationLeaderboard(this.dataPack(), extraParameters)
  }
  stats(extraParameters) {
    return _stats(this.dataPack(), extraParameters)
  }
  systems(extraParameters) {
    return _systems(this.dataPack(), extraParameters)
  }
  wars(extraParameters) {
    return _wars(this.dataPack(), extraParameters)
  }
}

