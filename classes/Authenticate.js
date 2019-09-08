const Core = require('../libs/Core')
const { nowInSeconds, tokenExchange } = require('../libs/Misc')

module.exports = class Authenticate extends Core {
  constructor(cfg = {}) {
    const { base, ver, src, agent, db, cb, clientID, clientSecret, scope } = cfg
    super({ base, ver, src, agent, db })

    this.callbackURL = cb
    this.clientID = clientID
    this.masterScopes = scope || []

    this.tokenOptions = {
      headers: {
        'Content-Type': 'application/json'
      },
      auth: `${this.clientID}:${clientSecret}`
    }
  }
  exportSettings() {
    return {
      base: this.baseURL,
      ver: this.version,
      src: this.source,
      agent: this.userAgent,
      db: this.db,
    }
  }

  buildRequestURL(scopes = []) {
    const useScope = (this.masterScopes.length > 0) ? this.masterScopes : scopes
    if (useScope.length == 0) throw new Error('must have at least 1 scope selected')
    return [`${this.baseURL}/oauth/authorize/?response_type=code`,
    `redirect_uri=${encodeURI(this.callbackURL)}`,
    `client_id=${this.clientID}`,
    `scope=${useScope.join(' ')}`].join('&')
  }
  setScope(scopes = []) {
    this.masterScopes = scopes
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
    const { CharacterID, CharacterName, Scopes } = await tokenVerify(access_token)
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



function tokenGet(path, options = {}) {
  options.headers = options.headers || {}
  options.headers['User-Agent'] = this.userAgent
  return getRequest(path, options)
}

function tokenVerify(accessToken) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
  }
  return tokenGet(`https://login.eveonline.com/oauth/verify`, options)
}

