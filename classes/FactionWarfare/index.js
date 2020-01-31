'use strict'

const Core = require('../Core')

const { _factionLeaderboard, _characterLeaderboard, _corporationLeaderboard, _stats, _systems, _wars } = require('./public')
const {  } = require('./authed')

module.exports = class FactionWarfare extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  factionLeaderboard() {
    return _factionLeaderboard(this.dataPack())
  }
  characterLeaderboard() {
    return _characterLeaderboard(this.dataPack())
  }
  corporationLeaderboard() {
    return _corporationLeaderboard(this.dataPack())
  }
  stats() {
    return _stats(this.dataPack())
  }
  systems() {
    return _systems(this.dataPack())
  }
  wars() {
    return _wars(this.dataPack())
  }
}

