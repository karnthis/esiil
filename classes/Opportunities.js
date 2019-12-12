const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  groups() {
    return this._makePublicGet(`opportunities/groups/`)
  }
  group(groupID) {
    return this._makePublicGet(`opportunities/groups/${groupID}/`)
  }
  tasks() {
    return this._makePublicGet(`opportunities/tasks/`)
  }
  task(taskID) {
    return this._makePublicGet(`opportunities/tasks/${taskID}/`)
  }

  // RESTRICTED

}