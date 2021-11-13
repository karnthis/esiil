import Defaults from '../defaults'
import { _sendTokenRequest } from '../libs/Fetchd'
import ISendTokenOpts from "../interfaces/SendTokenOpts";
import ITokenResponseBody from "../interfaces/TokenResponse";
import IServiceResponse from "../interfaces/ServiceResponse";

function _tokenExchange(payload: string): Promise<IServiceResponse> {
  const sendOpts: ISendTokenOpts = {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Defaults.authHeader()}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      Host: 'login.eveonline.com'
    }
  }
  return _sendTokenRequest(`${Defaults.oauthURL}/token`, sendOpts, payload)
}



// async function _refreshToken(bundle, refreshToken = '') {
//   const expiration = _nowInSeconds()
//   const payload = JSON.stringify({
//       "grant_type":"refresh_token",
//       "refresh_token":refreshToken
//     })
//   const { access_token, refresh_token } = await _tokenExchange({userAgent: bundle.userAgent}, bundle.tokenOptions, payload)
//     .then(res => res.body)
//     .catch(err => {
//       console.error(err)
//       throw new Error(err)
//     })
//   // const _ = await bundle.db.saveRefreshedToken(access_token, expiration, refresh_token)
//   return access_token
// }

export {
  _tokenExchange
}