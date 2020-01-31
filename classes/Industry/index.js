'use strict'

const Core = require('../Core')

const { _facilities, _systems } = require('./public')
const {  } = require('./authed')

module.exports = class Industry extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  facilities() {
    return _facilities(this.dataPack())
  }
  systems() {
    return _systems(this.dataPack())
  }
}

