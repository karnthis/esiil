'use strict'

const { oauthURL } = require('../../defaults')


function _buildRequestURL(bundle) {
  if (bundle.state.includes('&')) console.error(`Request URL state: Must not contain '&' symbol. Sanitizing...`)
  return [`${oauthURL}/authorize/?response_type=code`,
    `redirect_uri=${encodeURI(bundle.callbackURL)}`,
    `clientID=${bundle.clientID}`,
    `scope=${bundle.scopes.join(' ')}`,
    `state=${bundle.state.replace(/&/g, '')}`
  ].join('&')
}

module.exports = { _buildRequestURL }