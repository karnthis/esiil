const { basicGet, sendPathRequest, sendCustomRequest } = require('./Requests')
const { tokenExchange } = require('../libs/Misc')
const SQLEngine = require('./Database')


module.exports = class Core {
  constructor(cfg = {}) {
    this.userAgent = cfg.agent || 'ESIIO-Default/0.x'
    this.baseURL = cfg.base || 'https://esi.evetech.net/' // should not be overrode
    this.version = cfg.ver || 'latest/' // latest || dev || legacy
    this.source = cfg.src || 'tranquility' // tranquility || singularity

    this.urlPt1 = `${this.baseURL}${this.version}`
    this.urlPt2 = `?datasource=${this.source}`
    this.db = new SQLEngine(cfg.db)
  }

  // **** FUNCTIONS **** \\

  // publicPost(path, options = {}, payload = '') {
  //   options.method = 'POST'
  //   const url = `${this.urlPt1}${cleanURL(path)}${this.urlPt2}`
  //   return allRequest(url, options, payload)
  // }

  // restrictedGet(path, options = {}) {
  //   options.method = options.method || 'GET'
  //   options.headers = options.headers || {}
  //   options.headers['User-Agent'] = this.userAgent
  //   const url = `${this.urlPt1}${cleanURL(path)}${this.urlPt2}`
  //   return getRequest(url, options)
  // }
  // restrictedCall(path, options = {}, payload = '') {
  //   options.method = options.method || 'POST'
  //   options.headers = options.headers || {}
  //   options.headers['User-Agent'] = this.userAgent
  //   return allRequest(`${this.urlPt1}${cleanURL(path)}${this.urlPt2}`, {})
  // }

  // **** END FUNCTIONS **** \\


  async refreshToken(refreshToken = '') {
    const payload = JSON.stringify({
        "grant_type":"refresh_token",
        "code":refreshToken
      })
    const { access_token, refresh_token } = await tokenExchange(this.tokenOptions, payload, {userAgent: this.userAgent})
      .then(res => res.body)
      .catch(err => {
        console.error(err)
        throw new Error(err)
      })
    this.database.saveRefreshedToken(access_token, refresh_token)
    return access_token
  }
}
// **** END CLASS **** \\






function cleanURL(s) {
  while (s.indexOf('/') === 0) {
    s = s.slice(1)
  }
  return s
}