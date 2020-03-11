'use strict'

const Core = require('../Core')

const { _history, _orders, _types, _groups, _group, _prices } = require('./public')
const {  } = require('./authed')

module.exports = class Market extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  groups(extraParameters) {
    return _groups(this.dataPack(), extraParameters)
  }
  prices(extraParameters) {
    return _prices(this.dataPack(), extraParameters)
  }
  history(regionID, extraParameters) {
    return _history(this.dataPack(), regionID, extraParameters)
  }
  types(regionID, extraParameters) {
    return _types(this.dataPack(), regionID, extraParameters)
  }
  group(marketGroupID, extraParameters) {
    return _group(this.dataPack(), marketGroupID, extraParameters)
  }
  orders(regionID, extraParameters) {
    return _orders(this.dataPack(), regionID, extraParameters)
  }
}

