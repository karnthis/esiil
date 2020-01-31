'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./factionWarfareHelper')

function _factionLeaderboard(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/leaderboards/`)
}
function _characterLeaderboard(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/leaderboards/characters/`)
}
function _corporationLeaderboard(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/leaderboards/corporations/`)
}
function _stats(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/stats/`)
}
function _systems(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/systems/`)
}
function _wars(dataPack) {
  return _makePublicGet(dataPack, `${basePath}/wars/`)
}

module.exports = { _factionLeaderboard, _characterLeaderboard, _corporationLeaderboard, _stats, _systems, _wars }