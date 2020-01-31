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
      queryParams: this.queryParams,
      domainAndVersion: this.domainAndVersion,
      scopes: this.scopes,
      state: this.state,
      callbackURL: this.callbackURL,
      authedEnabled: this.authedEnabled,
      clientID: this.clientID,
      // clientSecret: this.clientSecret
    }
  }

  updateConfig(cfg = {}) {
    // console.dir(cfg)
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
    this.queryParams = `?datasource=${this.source}`

    // this.dataPack = {
    //   tokenOptions: {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     auth: `${cfg.clientID}:${cfg.clientSecret}`
    //   },
    //   userAgent: this.userAgent,
    //   baseURL: this.baseURL,
    //   version: this.version,
    //   source: this.source,
    //   db: this.db,
    //   queryParams: this.queryParams,
    //   domainAndVersion: this.domainAndVersion,
    //   scopes: this.scopes,
    //   state: this.state,
    //   authedEnabled: this.authedEnabled,
    //   clientID: this.clientID,
    //   clientSecret: this.clientSecret
    // }
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
        // console.log('Missing clientID or clientSecret, authenticated methods disabled')
        this.authedEnabled = false
        //TODO add disabling of authed routes
        throw new Error('Missing clientID or clientSecret, authenticated methods disabled')
      } else if (this.authBundle.scopes.length == 0) {
        throw new Error('Must have at least 1 scope selected')
      } else {
        this.authedEnabled = true
        this.requestURL = _buildRequestURL(this.authBundle)

        // this.tokenOptions = {
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   auth: `${cfg.clientID}:${cfg.clientSecret}`
        // }
        // this.clientSecret = cfg.clientSecret
      }
    }
    
  }
}

// **** FUNCTIONS **** \\
function _makePublicGet(dataPack, path, extraParams) {
  return _basicGet(path, dataPack, extraParams)
  // return _basicGet(path, this.dataPack, extraParams)
}
function _makePublicPost(dataPack, path, payload) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return _sendPathRequest(path, options, dataPack, payload)
}
async function _makeAuthedGet(dataPack, path, toonID) {
  const access_token = await _findToken(dataPack, toonID)
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    },
  }
  return _sendPathRequest(path, options, dataPack)
}
async function _makeAuthedPost(dataPack, path, payload, toonID) {
  const access_token = await _findToken(dataPack, toonID)
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(JSON.stringify(payload)),
      'Authorization': `Bearer ${access_token}`
    },
  }
  return _sendPathRequest(path, options, dataPack, payload)
}
//TODO finish real logic
async function _makeAuthedPut(path, payload, toonID) {
  const access_token = await _findToken(dataPack, toonID)
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(JSON.stringify(payload)),
      'Authorization': `Bearer ${access_token}`
    },
  }
  return _sendPathRequest(path, options, this.dataPack, payload)
}
//TODO finish real logic
async function _makeAuthedDelete(path, payload, toonID) {
  const access_token = await _findToken(dataPack, toonID)
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload),
      'Authorization': `Bearer ${access_token}`
    },
  }
  return _sendPathRequest(path, options, this.dataPack, payload)
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