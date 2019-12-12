'use strict'

const Core = require('../Core')

const { all, one, memberCorps, images } = require('./public')
const { contacts, contactLabels } = require('./authed')

module.exports = class Alliance extends Core.CoreClass {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)

    this.all = all
    this.one = one
    this.memberCorps = memberCorps
    this.images = images

    this.contacts = contacts
    this.contactLabels = contactLabels
  }
}

