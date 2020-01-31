'use strict'

const Core = require('../Core')

const { _allAttributes, _oneAttribute, _allEffects, _oneEffect, _dynamic } = require('./public')
const {  } = require('./authed')

module.exports = class Dogma extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }

  allAttributes() {
    return _allAttributes(this.dataPack())
  }
  allEffects() {
    return _allEffects(this.dataPack())
  }
  oneAttribute(input) {
    return _oneAttribute(this.dataPack(), input)
  }
  oneEffect(input) {
    return _oneEffect(this.dataPack(), input)
  }
  dynamic(typeID, itemID) {
    return _dynamic(this.dataPack(), typeID, itemID)
  }
}