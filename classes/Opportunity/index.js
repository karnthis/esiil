'use strict'

const Core = require('../Core')

const { _groups, _group, _tasks, _task } = require('./public')
const {  } = require('./authed')

module.exports = class Opportunity extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  groups(extraParameters) {
    return _groups(this.dataPack(), extraParameters)
  }
  group(groupID, extraParameters) {
    return _group(this.dataPack(), groupID, extraParameters)
  }
  tasks(extraParameters) {
    return _tasks(this.dataPack(), extraParameters)
  }
  task(taskID, extraParameters) {
    return _task(this.dataPack(), taskID, extraParameters)
  }
}

