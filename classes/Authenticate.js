const Core = require('../libs/Core')



module.exports = class Authenticate extends Core {
  constructor(cfg = {}) {
    const { base, ver, src, agent, db, cbPath, clientID, clientSecret, scope } = cfg
    super({ base, ver, src, agent, db, clientID, clientSecret })

    this.callbackURL = cbPath
    this.clientID = clientID
    this.clientSecret = clientSecret
    this.masterScopes = scope || []

    
  }
  share() {
    return {
      base: this.baseURL,
      ver: this.version,
      src: this.source,
      agent: this.userAgent,
      db: this.db,
      clientID: this.clientID,
      clientSecret: this.clientSecret
    }
  }

  
}
// **** END CLASS **** \\


