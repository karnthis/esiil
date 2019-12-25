'use strict'

const Core = require('../Core')

const { _all, _one, _attendees, _respond } = require('./authed')

module.exports = class Calendar extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }
  // RESTRICTED
  all(toon) {
    return _all(this.dataPack, toon, toon)
  }
  one(toon, event) {
    return _one(this.dataPack, toon, event, toon)
  }
  attendees(toon, event) {
    return _attendees(this.dataPack, toon, event, toon)
  }
  respond(toon, event, eventResponse) {
    return _respond(this.dataPack, toon, event, eventResponse, toon)
  }
}