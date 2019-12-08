const { basicGet, sendPathRequest, sendCustomRequest } = require('./Requests')
const { nowInSeconds, tokenExchange } = require('../libs/Misc')
const SQLEngine = require('./Database')


module.exports = class Core {
  constructor(cfg = {}) {
    this.userAgent = cfg.agent || 'ESIIO-Default/0.x'
    this.baseURL = cfg.base || 'https://esi.evetech.net/' // should not be overrode
    this.version = cfg.ver || 'latest/' // latest || dev || legacy
    this.source = cfg.src || 'tranquility' // tranquility || singularity

    this.domainAndVersion = `${this.baseURL}${this.version}`
    this.queryParams = `?datasource=${this.source}`
    this.db = new SQLEngine(cfg.db)

    this.dataPack = {
      userAgent: this.userAgent,
      domainAndVersion: this.domainAndVersion,
      queryParams: this.queryParams
    }
    this.tokenOptions = {
      headers: {
        'Content-Type': 'application/json'
      },
      auth: `${cfg.clientID}:${cfg.clientSecret}`
    }
  }

  // **** FUNCTIONS **** \\
  _makePublicGet(path, extras) {
    return (extras) ? basicGet(path, extras, this.dataPack) : basicGet(path, this.dataPack)
  }
  _makePublicPost(path, payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    return sendPathRequest(path, options, this.dataPack, payload)
  }

  async _findToken(toonID) {
    let { access_token, expires, refresh_token } = await this.db.toon2token2(toonID)
    // console.log('token: ',access_token)
    if (nowInSeconds() >= expires) {
    console.log('refresh hit')
    // console.dir(refresh_token)
    access_token = await this._refreshToken(refresh_token)
    }
    // console.log(access_token)
    return access_token
  }

  async _makeAuthedGet(path, toonID) {
    const access_token = await this._findToken(toonID)
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    }
    return sendPathRequest(path, options, this.dataPack)
  }
  async _makeAuthedPost(path, payload, toonID) {
    const access_token = await this._findToken(toonID)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
        'Authorization': `Bearer ${access_token}`
      },
    }
    return sendPathRequest(path, options, this.dataPack, payload)
  }
  async _makeAuthedPut(path, payload, toonID) {
    const access_token = await this._findToken(toonID)
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
        'Authorization': `Bearer ${access_token}`
      },
    }
    return sendPathRequest(path, options, this.dataPack, payload)
  }
  async _makeAuthedDelete(path, payload, toonID) {
    const access_token = await this._findToken(toonID)
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
        'Authorization': `Bearer ${access_token}`
      },
    }
    return sendPathRequest(path, options, this.dataPack, payload)
  }
  async _refreshToken(_refreshToken = '') {
    const expiration = nowInSeconds()
    const payload = JSON.stringify({
        "grant_type":"refresh_token",
        "refresh_token":_refreshToken
      })
    const { access_token, refresh_token } = await tokenExchange(this.tokenOptions, payload, {userAgent: this.userAgent})
      .then(res => res.body)
      .catch(err => {
        console.error(err)
        throw new Error(err)
      })
      // console.log('in refresh')
      // console.log(access_token)
    const _ = await this.db.saveRefreshedToken(access_token, expiration, refresh_token)
    return access_token
  }
  // **** END FUNCTIONS **** \\
}
// **** END CLASS **** \\
