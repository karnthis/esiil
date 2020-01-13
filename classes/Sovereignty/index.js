'use strict'

const Core = require('../Core')

const { _campaigns, _map, _structures } = require('./public')
const {  } = require('./authed')

module.exports = class Sovereignty extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  campaigns() {
    return _campaigns(this.dataPack())
  }
  map() {
    return _map(this.dataPack())
  }
  structures() {
    return _structures(this.dataPack())
  }
}

