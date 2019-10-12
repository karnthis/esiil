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
  group(group_id) {
    return this._makePublicGet(`opportunities/groups/${group_id}/`)
  }
  tasks() {
    return this._makePublicGet(`opportunities/tasks/`)
  }
  task(task_id) {
    return this._makePublicGet(`opportunities/tasks/${task_id}/`)
  }

  // RESTRICTED

}