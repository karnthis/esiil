const { basicGet, sendPathRequest, sendCustomRequest } = require('./Requests')
const { nowInSeconds, tokenExchange } = require('../libs/Misc')
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

    this.dataPack = {
      userAgent: this.userAgent,
      urlPt1: this.urlPt1,
      urlPt2: this.urlPt2
    }
    this.tokenOptions = {
      headers: {
        'Content-Type': 'application/json'
      },
      auth: `${cfg.clientID}:${cfg.clientSecret}`
    }
  }

  // **** FUNCTIONS **** \\
  makePublicGet(path) {
    return basicGet(path, this.dataPack)
  }
  makePublicPost(path) {
    return sendPathRequest(path, {}, payload, this.dataPack)
  }

  async findToken(toonID) {
    let { access_token, expires, refresh_token } = await this.db.toon2token2(toonID)
    // console.log('token: ',access_token)
    if (nowInSeconds() >= expires) {
    console.log('refresh hit')
    // console.dir(refresh_token)
    access_token = await this.refreshToken(refresh_token)
    }
    // console.log(access_token)
    return access_token
  }

  async makeAuthedGet(path, toonID) {
    const access_token = await this.findToken(toonID)
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    }
    return sendPathRequest(path, options, this.dataPack)
  }
  async makeAuthedPost(path, toonID, payload) {
    const access_token = await this.findToken(toonID)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    }
    return sendPathRequest(path, options, this.dataPack, payload)
  }
  async refreshToken(refreshToken = '') {
    const expiration = nowInSeconds()
    const payload = JSON.stringify({
        "grant_type":"refresh_token",
        "refresh_token":refreshToken
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
