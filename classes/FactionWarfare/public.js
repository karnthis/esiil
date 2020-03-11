'use strict'

const { _makePublicGet } = require('../Core')
const { basePath } = require('./factionWarfareHelper')

function _factionLeaderboard(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/leaderboards/`, extraParams)
}
function _characterLeaderboard(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/leaderboards/characters/`, extraParams)
}
function _corporationLeaderboard(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/leaderboards/corporations/`, extraParams)
}
function _stats(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/stats/`, extraParams)
}
function _systems(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/systems/`, extraParams)
}
function _wars(dataPack, extraParams) {
  return _makePublicGet(dataPack, `${basePath}/wars/`, extraParams)
}

module.exports = { _factionLeaderboard, _characterLeaderboard, _corporationLeaderboard, _stats, _systems, _wars }