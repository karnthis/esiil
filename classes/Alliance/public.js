'use strict'

function all() {
  return this._makePublicGet(`${basePath}/`)
}
function one(allianceID) {
  return this._makePublicGet(`${basePath}/${allianceID}`)
}
function memberCorps(allianceID) {
  return this._makePublicGet(`${basePath}/${allianceID}/corporations/`)
}
function images(allianceID) {
  return this._makePublicGet(`${basePath}/${allianceID}/icons/`)
}