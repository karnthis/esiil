'use strict'

const Core = require('../Core')

const { _all, _one, _killmails } = require('./public')
const {  } = require('./authed')

module.exports = class War extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  all(extraParameters) {
    return _all(this.dataPack(), extraParameters)
  }
  one(warID, extraParameters) {
    return _one(this.dataPack(), warID, extraParameters)
  }
  killmails(warID, extraParameters) {
    return _killmails(this.dataPack(), warID, extraParameters)
  }
}

