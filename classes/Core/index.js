'use strict'

const Defaults = require('../../defaults')

const { basicGet, sendPathRequest } = require('../../libs/Requests')

const { nowInSeconds } = require('../../helpers/Time')
const { tokenExchange } = require('./CoreHelpers')


class CoreClass {
  constructor(cfg) {
    this.updateConfig(cfg)
  }

  updateConfig(cfg = {}) {
    this.userAgent = cfg.userAgent || Defaults.userAgent
    this.baseURL = cfg.baseURL || Defaults.baseURL
    this.version = cfg.version || Defaults.version
    this.source = cfg.source || Defaults.source
    this.db = cfg.db

    this.domainAndVersion = `${this.baseURL}${this.version}`
    this.queryParams = `?datasource=${this.source}`

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
    if (!cfg.clientID || !cfg.clientSecret) {
      console.log('Missing clientID or clientSecret, authenticated methods disabled')
      //TODO add disabling of authed routes
    }
  }
}

  // **** FUNCTIONS **** \\
  function _makePublicGet(path, extraParams) {
    return basicGet(path, this.dataPack, extraParams)
  }

  function _makePublicPost(path, payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    return sendPathRequest(path, options, this.dataPack, payload)
  }

  async function _findToken(toonID) {
    let { access_token, expires, refresh_token } = await this.db.toon2token2(toonID)
    if (nowInSeconds() >= expires) {
    console.log('refresh hit')
    access_token = await this._refreshToken(refresh_token)
    }
    return access_token
  }

  async function _makeAuthedGet(path, toonID) {
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
  async function _makeAuthedPost(path, payload, toonID) {
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
  async function _makeAuthedPut(path, payload, toonID) {
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
  async function _makeAuthedDelete(path, payload, toonID) {
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
  async function _refreshToken(_refreshToken = '') {
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

// **** END CLASS **** \\


module.exports = {
  CoreClass,
  // _makePublicGet,
  // _makePublicPost,
  // _findToken,
  // _makeAuthedGet,
  // _makeAuthedPost,
  // _makeAuthedPut,
  // _makeAuthedDelete,
  // _refreshToken
}