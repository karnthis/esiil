'use strict'

const Core = require('../Core')

const { _allInRegion, _oneBids, _oneItems } = require('./public')
const {  } = require('./authed')

module.exports = class Contract extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  allInRegion(regionID, extraParameters) {
    return _allInRegion(this.dataPack(), regionID, extraParameters)
  }
  bids(contractID, extraParameters) {
    return _oneBids(this.dataPack(), contractID, extraParameters)
  }
  items(contractID, extraParameters) {
    return _oneItems(this.dataPack(), contractID, extraParameters)
  }
}