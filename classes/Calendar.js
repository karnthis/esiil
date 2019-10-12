const Core = require('../libs/Core')

const rootPath = 'characters'
const basePath = 'calendar'

module.exports = class Calendar extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC


  // RESTRICTED
  all(character_id, toonID) {
    return this._makeAuthedGet(`${rootPath}/${character_id}/${basePath}/`, toonID)
  }
  one(character_id, event_id, toonID) {
    return this._makeAuthedGet(`${rootPath}/${character_id}/${basePath}/${event_id}/`, toonID)
  }
  attendees(character_id, event_id, toonID) {
    return this._makeAuthedGet(`${rootPath}/${character_id}/${basePath}/${event_id}/attendees/`, toonID)
  }
  respond(character_id, event_id, response, toonID) {
    if (!response.match(/accepted|declined|tentative/)) throw new Error('response must be accepted, declined, or tentative')
    return this._makeAuthedPut(`${rootPath}/${character_id}/${basePath}/${event_id}/`, JSON.stringify({response}), toonID)
  }
}