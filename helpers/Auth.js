'use strict'

const { oauthURL } = require('./defaults')
const { _nowInSeconds } = require('./helpers/Time')
const { _sendTokenRequest } = require('./libs/Requests')
const { _tokenExchange } = require('./helpers/Token')

function _tokenVerify(accessToken, userAgent) {
  const options = {
    headers: {
      'User-Agent': userAgent,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
  }
  return _sendTokenRequest(`${oauthURL}/verify`, options)
}

async function _processAuthToken(bundle, authToken = '') {
  const expiration = _nowInSeconds() + 1200
  const payload = JSON.stringify({
      "grant_type":"authorization_code",
      "code":authToken
    })
  const { access_token, refresh_token } = await _tokenExchange(bundle.tokenOptions, payload, {userAgent: bundle.userAgent})
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error(err)
      throw new Error(err)
    })
  const { CharacterID, CharacterName, Scopes } = await _tokenVerify(access_token, bundle.userAgent)
  .then(res => {
    return res.body
  })
  .catch(err => {
    console.error(err)
    throw new Error(err)
  })
  bundle.db.saveNewToken({ expiration, access_token, refresh_token, CharacterID, CharacterName, Scopes })
  return {toonID: CharacterID}
}


module.exports = {
  _processAuthToken
}