'use strict'

const { oauthURL } = require('../../defaults')


function _buildRequestURL(bundle) {
  if (bundle.state.includes('&')) console.error(`Request URL state: Must not contain '&' symbol. Sanitizing...`)
  const theState = bundle.state.replace(/&/g, '') || 'default'
  return `${oauthURL}/authorize/?` + [`response_type=code`,
    `redirect_uri=${encodeURIComponent(bundle.callbackURL)}`,
    // `redirect_uri=${bundle.callbackURL}`,
    `client_id=${bundle.clientID}`,
    `scope=${encodeURIComponent(bundle.scopes.join(' '))}`,
    `state=${theState}`
  ].join('&')
}

module.exports = { _buildRequestURL }