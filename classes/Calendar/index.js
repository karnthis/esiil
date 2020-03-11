'use strict'

const Core = require('../Core')

const { _all, _one, _attendees, _respond } = require('./authed')

module.exports = class Calendar extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }
  // RESTRICTED
  all(authenticatedToon, extraParameters) {
    return _all(this.dataPack(), authenticatedToon, authenticatedToon, extraParameters)
  }
  one(authenticatedToon, event, extraParameters) {
    return _one(this.dataPack(), authenticatedToon, event, authenticatedToon, extraParameters)
  }
  attendees(authenticatedToon, event, extraParameters) {
    return _attendees(this.dataPack(), authenticatedToon, event, authenticatedToon, extraParameters)
  }
  respond(authenticatedToon, event, eventResponse, extraParameters) {
    return _respond(this.dataPack(), authenticatedToon, event, eventResponse, authenticatedToon, extraParameters)
  }
}