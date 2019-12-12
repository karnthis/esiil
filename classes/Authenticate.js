const Core = require('../libs/Core')
const { nowInSeconds, tokenExchange } = require('../libs/Misc')
const { sendTokenRequest } = require('../libs/Requests')



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

  buildRequestURL(scopes = [], state = '') {
    const useScope = (this.masterScopes.length > 0) ? this.masterScopes : scopes
    if (state.includes('&')) console.error(`Request URL state: Must not contain '&' symbol. Sanitizing...`)
    if (useScope.length == 0) throw new Error('must have at least 1 scope selected')
    return [`https://login.eveonline.com/oauth/authorize/?response_type=code`,
      `redirect_uri=${encodeURI(this.callbackURL)}`,
      `clientID=${this.clientID}`,
      `scope=${useScope.join(' ')}`,
      `state=${state.replace(/&/g, '')}`
    ].join('&')
  }
  async setScope(scopes = []) {
    if (scopes == 'all') {
      this.masterScopes = await this.db.getAllScopes()
      // console.log(this.masterScopes)
    } else {
      this.masterScopes = scopes
    }
  }

  async processAuthToken(authToken = '') {
    const expiration = nowInSeconds() + 1200
    const payload = JSON.stringify({
        "grant_type":"authorization_code",
        "code":authToken
      })
    const { access_token, refresh_token } = await tokenExchange(this.tokenOptions, payload, {userAgent: this.userAgent})
      .then(res => {
        // console.dir(res)
        return res.body
      })
      .catch(err => {
        console.error(err)
        throw new Error(err)
      })
    const { CharacterID, CharacterName, Scopes } = await tokenVerify(access_token, this.userAgent)
    .then(res => {
      // console.dir(res)
      return res.body
    })
    .catch(err => {
      console.error(err)
      throw new Error(err)
    })
    // console.dir(Scopes)
    this.db.saveNewToken({ expiration, access_token, refresh_token, CharacterID, CharacterName, Scopes })
    return {toonID: CharacterID}
  }
}
// **** END CLASS **** \\



function tokenVerify(accessToken, userAgent) {
  const options = {
    headers: {
      'User-Agent': userAgent,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
  }
  return sendTokenRequest(`https://login.eveonline.com/oauth/verify`, options)
}

