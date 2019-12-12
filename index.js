const Core = require('./classes/Core')
const SQLEngine = require('./libs/Database')


// const { Icons } = require('./classes/Groups')
const Alliance = require('./classes/Alliance')
// const Authenticate = require('./classes/Authenticate')
// const Character = require('./classes/Character')
// const Contract = require('./classes/Contract')
// const Corp = require('./classes/Corp')
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
  // class ESIIL {
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

  newAlliance() {
    // console.log('alliance')
    return new Alliance()
  }
  newCharacter() {
    // console.log(this.data)
    // return new Character()
  }
}


function init(cfg) {
  // console.log('great success')
  return new ESIIL(cfg)
}

exports = module.exports = init
