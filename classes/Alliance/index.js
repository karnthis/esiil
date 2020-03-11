'use strict'

const Core = require('../Core')

const { _all, _one, _memberCorps, _images } = require('./public')
const { _contacts, _contactLabels } = require('./authed')

module.exports = class Alliance extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  all() {
    return _all(this.dataPack())
  }
  one(input) {
    return _one(this.dataPack(), input)
  }
  memberCorps(input) {
    return _memberCorps(this.dataPack(), input)
  }
  images(input) {
    return _images(this.dataPack(), input)
  }

  contacts(alliance, authenticatedToon, extraParams) {
    return _contacts(this.dataPack(), alliance, authenticatedToon, extraParams)
  }
  contactLabels(alliance, authenticatedToon, extraParams) {
    return _contactLabels(this.dataPack(), alliance, authenticatedToon, extraParams)
  }
}

