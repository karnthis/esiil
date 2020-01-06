const Core = require('../libs/Core')

const basePath = 'characters'
const subPath = 'calendar'

module.exports = class Calendar extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC


  // RESTRICTED
  all(characterID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/${subPath}/`, toonID)
  }
  one(characterID, eventID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/${subPath}/${eventID}/`, toonID)
  }
  attendees(characterID, eventID, toonID) {
    return this._makeAuthedGet(`${basePath}/${characterID}/${subPath}/${eventID}/attendees/`, toonID)
  }
  respond(characterID, eventID, response, toonID) {
    if (!response.match(/accepted|declined|tentative/)) throw new Error('response must be accepted, declined, or tentative')
    return this._makeAuthedPut(`${rootPath}/${characterID}/${basePath}/${eventID}/`, JSON.stringify({response}), toonID)
  }
}