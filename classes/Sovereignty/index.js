'use strict'

const Core = require('../Core')

const { _campaigns, _map, _structures } = require('./public')
const {  } = require('./authed')

module.exports = class Sovereignty extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  campaigns(extraParameters) {
    return _campaigns(this.dataPack(), extraParameters)
  }
  map(extraParameters) {
    return _map(this.dataPack(), extraParameters)
  }
  structures(extraParameters) {
    return _structures(this.dataPack(), extraParameters)
  }
}

