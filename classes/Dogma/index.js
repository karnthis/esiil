'use strict'

const Core = require('../Core')

const { _allAttributes, _oneAttribute, _allEffects, _oneEffect, _dynamic } = require('./public')
const {  } = require('./authed')

module.exports = class Dogma extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  allAttributes(extraParameters) {
    return _allAttributes(this.dataPack(), extraParameters)
  }
  allEffects(extraParameters) {
    return _allEffects(this.dataPack(), extraParameters)
  }
  oneAttribute(attributeID, extraParameters) {
    return _oneAttribute(this.dataPack(), attributeID, extraParameters)
  }
  oneEffect(effectID, extraParameters) {
    return _oneEffect(this.dataPack(), effectID, extraParameters)
  }
  dynamic(typeID, itemID, extraParameters) {
    return _dynamic(this.dataPack(), typeID, itemID, extraParameters)
  }
}