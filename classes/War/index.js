'use strict'

const Core = require('../Core')

const { _all, _one, _killmails } = require('./public')
const {  } = require('./authed')

module.exports = class War extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  all() {
    return _all(this.dataPack())
  }
  one(warID) {
    return _one(this.dataPack(), warID)
  }
  killmails(warID) {
    return _killmails(this.dataPack(), warID)
  }
}

