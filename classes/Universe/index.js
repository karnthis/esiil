'use strict'

const Core = require('../Core')

const { _piSchematics, _name2ID } = require('./public')
const {  } = require('./authed')

module.exports = class Universe extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  piSchematics(schematicsID) {
    return _piSchematics(this.dataPack(), schematicsID)
  }
  name2ID(names) {
    return _name2ID(this.dataPack(), names)
  }

}

