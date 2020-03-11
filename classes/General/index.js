'use strict'

const Core = require('../Core')

const { _incursions, _insurance, _lpStore, _oneKillmail, _route, _search, _status } = require('./public')
const {  } = require('./authed')

module.exports = class General extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  incursions(extraParameters) {
    return _incursions(this.dataPack(), extraParameters)
  }
  insurance(extraParameters) {
    return _insurance(this.dataPack(), extraParameters)
  }
  search(extraParameters) {
    return _search(this.dataPack(), extraParameters)
  }
  status(extraParameters) {
    return _status(this.dataPack(), extraParameters)
  }
  lpStore(corporationID, extraParameters) {
    return _lpStore(this.dataPack(), corporationID, extraParameters)
  }
  oneKillmail(killmailID, killmailHash, extraParameters) {
    return _oneKillmail(this.dataPack(), killmailID, killmailHash, extraParameters)
  }
  route(originID, destinationID, extraParameters) {
    return _route(this.dataPack(), originID, destinationID, extraParameters)
  }
}

