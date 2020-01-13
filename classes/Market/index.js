'use strict'

const Core = require('../Core')

const { _history, _orders, _types, _groups, _group, _prices } = require('./public')
const {  } = require('./authed')

module.exports = class Market extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  groups() {
    return _groups(this.dataPack())
  }
  prices() {
    return _prices(this.dataPack())
  }
  history(regionID) {
    return _history(this.dataPack(), regionID)
  }
  types(regionID) {
    return _types(this.dataPack(), regionID)
  }
  group(market_groupID) {
    return _group(this.dataPack(), market_groupID)
  }
  orders(regionID, extras) {
    return _orders(this.dataPack(), regionID, extras)
  }
}

