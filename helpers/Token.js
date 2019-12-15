'use strict'

const { oauthURL } = require('../defaults')
const { _sendCustomRequest } = require('../libs/Requests')
const { _nowInSeconds } = require('./Time')

function _tokenExchange(data, options, payload) {
  options.method = 'POST'
  return _sendCustomRequest(`${oauthURL}/token`, options, payload, data)
}

async function _findToken(bundle, toonID) {
  let { accessToken, expires, refreshToken } = await bundle.db.toon2token2(toonID)
  if (_nowInSeconds() >= expires) {
    accessToken = await _refreshToken(bundle, refreshToken)
  }
  return accessToken
}

async function _refreshToken(bundle, refreshToken = '') {
  const expiration = _nowInSeconds()
  const payload = JSON.stringify({
      "grant_type":"refresh_token",
      "refresh_token":refreshToken
    })
  const { access_token, refresh_token } = await _tokenExchange({userAgent: bundle.userAgent}, bundle.tokenOptions, payload)
    .then(res => res.body)
    .catch(err => {
      console.error(err)
      throw new Error(err)
    })
  const _ = await bundle.db.saveRefreshedToken(access_token, expiration, refresh_token)
  return access_token
}

module.exports = {
  _findToken,
  _tokenExchange
}