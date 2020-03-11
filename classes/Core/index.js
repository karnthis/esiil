'use strict'

const Defaults = require('../../defaults')
const { _basicGet, _sendPathRequest } = require('../../libs/Requests')
const { _findToken } = require('../../helpers/Token')
const { _buildRequestURL } = require('./coreHelper')


class CoreClass {
  constructor(cfg) {
    this.updateConfig(cfg)
  }

  dataPack() {
    return {
      tokenOptions: {
        headers: {
          'Content-Type': 'application/json'
        },
        auth: `${this.clientID}:${this.clientSecret}`
      },
      userAgent: this.userAgent,
      baseURL: this.baseURL,
      version: this.version,
      source: this.source,
      db: this.db,
      queryParamStart: this.queryParamStart,
      domainAndVersion: this.domainAndVersion,
      scopes: this.scopes,
      state: this.state,
      callbackURL: this.callbackURL,
      authedEnabled: this.authedEnabled,
      clientID: this.clientID,
    }
  }

  updateConfig(cfg = {}) {
    this.userAgent = cfg.userAgent || Defaults.userAgent
    this.baseURL = cfg.baseURL || Defaults.baseURL
    this.version = cfg.version || Defaults.version
    this.source = cfg.source || Defaults.source
    this.db = cfg.db
    this.scopes = cfg.scopes || []
    this.state = cfg.state || ''

    this.callbackURL = cfg.callbackURL
    this.clientID = cfg.clientID
    this.clientSecret = cfg.clientSecret
    this.authedEnabled = cfg.authedEnabled


    this.domainAndVersion = `${this.baseURL}${this.version}`
    this.queryParamStart = `?datasource=${this.source}`

    this.authBundle = {
      scopes: this.scopes,
      state: this.state,
      authedEnabled: this.authedEnabled,
      callbackURL: this.callbackURL,
      clientID: this.clientID,
      clientSecret: this.clientSecret
    }
    if (cfg.requestURL) {
      this.requestURL = cfg.requestURL
    } else {
      if (!cfg.clientID || !cfg.clientSecret) {
        console.log(cfg.clientID)
        console.log(cfg.clientSecret)
        this.authedEnabled = false
        //TODO add disabling of authed routes
        throw new Error('Missing clientID or clientSecret, authenticated methods disabled')
      } else if (this.authBundle.scopes.length == 0) {
        throw new Error('Must have at least 1 scope selected')
      } else {
        this.authedEnabled = true
        this.requestURL = _buildRequestURL(this.authBundle)
      }
    }
    
  }
}

// **** FUNCTIONS **** \\
function _makePublicGet(dataPack, path, extraParams = {}) {
  return _basicGet(path, extraParams, dataPack)
}
function _makePublicPost(dataPack, path, payload, extraParams = {}) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return _sendPathRequest(path, extraParams, options, dataPack, payload)
}
async function _makeAuthedGet(dataPack, path, toonID, extraParams = {}) {
  const access_token = await _findToken(dataPack, toonID)
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    },
  }
  return _sendPathRequest(path, extraParams, options, dataPack)
}
async function _makeAuthedPost(dataPack, path, payload, toonID, extraParams = {}) {
  const access_token = await _findToken(dataPack, toonID)
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(JSON.stringify(payload)),
      'Authorization': `Bearer ${access_token}`
    },
  }

  return _sendPathRequest(path, extraParams, options, dataPack, payload)
}
//TODO finish real logic
async function _makeAuthedPut(dataPack, path, payload, toonID, extraParams = {}) {
  const access_token = await _findToken(dataPack, toonID)
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(JSON.stringify(payload)),
      'Authorization': `Bearer ${access_token}`
    },
  }
  return _sendPathRequest(path, extraParams, options, this.dataPack, payload)
}
//TODO finish real logic
async function _makeAuthedDelete(path, payload, toonID, extraParams = {}) {
  const access_token = await _findToken(dataPack, toonID)
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload),
      'Authorization': `Bearer ${access_token}`
    },
  }
  return _sendPathRequest(path, extraParams, options, this.dataPack, payload)
}

// **** END FUNCTIONS **** \\

// **** END CLASS **** \\


module.exports = {
  CoreClass,
  _makePublicGet,
  _makePublicPost,
  _makeAuthedGet,
  _makeAuthedPost,
  // _makeAuthedPut,
  // _makeAuthedDelete,
}