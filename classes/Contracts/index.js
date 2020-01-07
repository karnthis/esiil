'use strict'

const Core = require('../Core')

const { _allInRegion, _oneBids, _oneItems } = require('./public')
const {  } = require('./authed')

module.exports = class Contracts extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  allInRegion(input) {
    return _allInRegion(this.dataPack(), input)
  }
  oneBids(input) {
    return _oneBids(this.dataPack(), input)
  }
  oneItems(input) {
    return _oneItems(this.dataPack(), input)
  }
}