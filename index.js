'use strict'

const { _buildRequestURL, _processAuthToken } = require('./indexHelper')

const Core = require('./classes/Core')
const SQLEngine = require('./libs/Database')

// const { Icons } = require('./classes/Groups')
const Alliance = require('./classes/Alliance')
// const Authenticate = require('./classes/Authenticate')
const Character = require('./classes/Character')
// const Contract = require('./classes/Contract')
const Corp = require('./classes/Corp')
// const Dogma = require('./classes/Dogma')
// const FactionWarfare = require('./classes/FactionWarfare')
// const Fleet = require('./classes/Fleet')
// const General = require('./classes/General')
// const Industry = require('./classes/Industry')
// const Killmail = require('./classes/Killmail')
// const Mail = require('./classes/Mail')
// const Market = require('./classes/Market')
// const Opportunities = require('./classes/Opportunities')
// const Sovereignty = require('./classes/Sovereignty')
// const Universe = require('./classes/Universe')
// const Wallet = require('./classes/Wallet')
// const War = require('./classes/War')
// const UI = require('./classes/UI')

class ESIIL extends Core.CoreClass {
  constructor(cfg) {
    super(cfg)
    this.instances = []
    this.db = new SQLEngine(cfg.dbConfig)
  }

  updateAllConfigs(cfg) {
    this.instances.forEach(instance => {
      instance.updateConfig(cfg)
    })
  }

  authRequestURL() {
    return this.requestURL
  }
  receiveAuthCode(authCode) {
    return _processAuthToken(this.dataPack, authCode)
  }

  newAlliance() {
    const instance = new Alliance(this)
    this.instances.push(instance)
    return instance
  }
  newCharacter() {
    const instance = new Character(this)
    this.instances.push(instance)
    return instance
  }
  newCorp() {
    const instance = new Corp(this)
    this.instances.push(instance)
    return instance
  }
}


function init(cfg) {
  return new ESIIL(cfg)
}

exports = module.exports = init
