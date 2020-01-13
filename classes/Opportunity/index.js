'use strict'

const Core = require('../Core')

const { _groups, _group, _tasks, _task } = require('./public')
const {  } = require('./authed')

module.exports = class Opportunity extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  groups() {
    return _groups(this.dataPack())
  }
  group(groupID) {
    return _group(this.dataPack(), groupID)
  }
  tasks() {
    return _tasks(this.dataPack())
  }
  task(taskID) {
    return _task(this.dataPack(), taskID)
  }
}

