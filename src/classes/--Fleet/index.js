'use strict'

const Core = require('../Core')

const { _all } = require('./public')
const {  } = require('./authed')

module.exports = class Fleet extends Core.CoreClass {
  constructor(cfg = {}) {
    super(cfg)
  }
// TODO
  all() {
    return _all(this.dataPack())
  }

}

