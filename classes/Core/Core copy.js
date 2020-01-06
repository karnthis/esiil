const { basicGet, sendPathRequest, sendCustomRequest } = require('../../libs/Requests')
const { nowInSeconds, tokenExchange } = require('../../libs/helpers/Misc')
const SQLEngine = require('../../libs/Database')


module.exports = class Core {
  constructor(cfg = {}) {
    this.userAgent = cfg.agent || 'ESIIO-Default/0.x'
    this.version = cfg.ver || 'latest/' // latest || dev || legacy
    this.source = cfg.src || 'tranquility' // tranquility || singularity
    
    this.baseURL = 'https://esi.evetech.net/'


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

  // **** FUNCTIONS **** \\
  _makePublicGet(path, extraParams) {
    return basicGet(path, this.dataPack, extraParams)
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
    if (nowInSeconds() >= expires) {
    console.log('refresh hit')
    access_token = await this._refreshToken(refresh_token)
    }
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
    const { access_token, refresh_token } = await tokenExchange({userAgent: this.userAgent}, this.tokenOptions, payload)
      .then(res => res.body)
      .catch(err => {
        console.error(err)
        throw new Error(err)
      })
    const _ = await this.db.saveRefreshedToken(access_token, expiration, refresh_token)
    return access_token
  }
  // **** END FUNCTIONS **** \\
}
// **** END CLASS **** \\
