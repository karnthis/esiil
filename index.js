'use strict'

const { _processAuthToken } = require('./indexHelper')

const Core = require('./classes/Core')
const SQLEngine = require('./libs/Database')

const Alliance = require('./classes/Alliance')
const Character = require('./classes/Character')
const Contract = require('./classes/Contract')
const Corp = require('./classes/Corp')
const Dogma = require('./classes/Dogma')
const FactionWarfare = require('./classes/FactionWarfare')
// const Fleet = require('./classes/Fleet')
const General = require('./classes/General')
const Industry = require('./classes/Industry')
// const Killmail = require('./classes/Killmail')
// const Mail = require('./classes/Mail')
const Market = require('./classes/Market')
const Opportunity = require('./classes/Opportunity')
const Sovereignty = require('./classes/Sovereignty')
// const UI = require('./classes/UI')
const Universe = require('./classes/Universe')
// const Wallet = require('./classes/Wallet')
const War = require('./classes/War')

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
    return _processAuthToken(this.dataPack(), authCode)
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
  newContract() {
    const instance = new Contract(this)
    this.instances.push(instance)
    return instance
  }
  newCorp() {
    const instance = new Corp(this)
    this.instances.push(instance)
    return instance
  }
  newDogma() {
    const instance = new Dogma(this)
    this.instances.push(instance)
    return instance
  }
  newFactionWarfare() {
    const instance = new FactionWarfare(this)
    this.instances.push(instance)
    return instance
  }
  newGeneral() {
    const instance = new General(this)
    this.instances.push(instance)
    return instance
  }
  newIndustry() {
    const instance = new Industry(this)
    this.instances.push(instance)
    return instance
  }
  newMarket() {
    const instance = new Market(this)
    this.instances.push(instance)
    return instance
  }
  newOpportunity() {
    const instance = new Opportunity(this)
    this.instances.push(instance)
    return instance
  }
  newSovereignty() {
    const instance = new Sovereignty(this)
    this.instances.push(instance)
    return instance
  }
  newUniverse() {
    const instance = new Universe(this)
    this.instances.push(instance)
    return instance
  }
  newWar() {
    const instance = new War(this)
    this.instances.push(instance)
    return instance
  }
}


function init(cfg) {
  return new ESIIL(cfg)
}

exports = module.exports = init
