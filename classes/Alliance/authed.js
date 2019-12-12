'use strict'

function contacts(allianceID, toonID) {
  return this._makeAuthedGet(`${basePath}/${allianceID}/contacts/labels/`, toonID)
}
function contactLabels(allianceID, toonID) {
  return this._makeAuthedGet(`${basePath}/${allianceID}/contacts/labels/`, toonID)
}