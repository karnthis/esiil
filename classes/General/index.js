'use strict'

const Core = require('../Core')

const { _incursions, _insurance, _lpStore, _oneKillmail, _route, _search, _status } = require('./public')
const {  } = require('./authed')

module.exports = class General extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  incursions() {
    return _incursions(this.dataPack())
  }
  insurance() {
    return _insurance(this.dataPack())
  }
  search() {
    return _search(this.dataPack())
  }
  status() {
    return _status(this.dataPack())
  }
  lpStore(corporationID) {
    return _lpStore(this.dataPack(), corporationID)
  }
  oneKillmail(killmailID, killmailHash) {
    return _oneKillmail(this.dataPack(), killmailID, killmailHash)
  }
  route(originID, destinationID) {
    return _route(this.dataPack(), originID, destinationID)
  }
}

