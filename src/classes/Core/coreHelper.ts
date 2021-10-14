import IRequestUrl from "../../interfaces/RequestUrl";
import Defaults from '../../defaults'

function _buildRequestURL(bundle:IRequestUrl) {
  if (bundle.state.includes('&')) console.error(`Request URL state: Must not contain '&' symbol. Sanitizing...`)
  const theState = bundle.state.replace(/&/g, '') || 'default'
  return `${Defaults.oauthURL}/authorize/?` + [`response_type=code`,
    `redirect_uri=${encodeURIComponent(bundle.callbackURL)}`,
    `client_id=${bundle.clientID}`,
    `scope=${encodeURIComponent(bundle.scopes.join(' '))}`,
    `state=${theState}`
  ].join('&')
}

export { _buildRequestURL }