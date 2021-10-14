import Defaults from'./defaults'
import { _tokenExchange } from './helpers/Token'

import jwt from 'jsonwebtoken'
import jwkToPem from 'jwk-to-pem'
import IRequestUrl from "./interfaces/RequestUrl";
import ITokenResponse from "./interfaces/TokenResponse";
import IServiceResponse from "./interfaces/ServiceResponse";

function _buildRequestURL(bundle: IRequestUrl) {
  if (bundle.state.includes('&')) console.error(`Request URL state: Must not contain '&' symbol. Sanitizing...`)
  return [`${Defaults.oauthURL}/authorize/?response_type=code`,
    `redirect_uri=${encodeURI(bundle.callbackURL)}`,
    `clientID=${Defaults.clientID}`,
    `scope=${bundle.scopes.join(' ')}`,
    `state=${bundle.state.replace(/&/g, '')}`
  ].join('&')
}

async function _processAuthToken(authToken: string = '') {
  // const payload = {
  //   "grant_type": "authorization_code",
  //   "code": authToken
  // }
  const tempkey = {
    "alg":"ES256",
    "crv":"P-256",
    "kid":"0C0029DE-B898-4EFC-8586-DD4AA948AE22",
    "kty":"EC",
    "use":"sig",
    "x":"cRs59CHa39w6m48qqhqygXNXLmAbfp8yteQTjGBie9I",
    "y":"Sm7nSOWIqLc8xMK5CRhEiePi9iNukStXhssrYdSiMk0"
  }
  const tempkey2 = {
    alg:"RS256",
    e:"AQAB",
    kid:"JWT-Signature-Key",
    kty:'RSA',
    n:"nehPQ7FQ1YK-leKyIg-aACZaT-DbTL5V1XpXghtLX_bEC-fwxhdE_4yQKDF6cA-V4c-5kh8wMZbfYw5xxgM9DynhMkVrmQFyYB3QMZwydr922UWs3kLz-nO6vi0ldCn-ffM9odUPRHv9UbhM5bB4SZtCrpr9hWQgJ3FjzWO2KosGQ8acLxLtDQfU_lq0OGzoj_oWwUKaN_OVfu80zGTH7mxVeGMJqWXABKd52ByvYZn3wL_hG60DfDWGV_xfLlHMt_WoKZmrXT4V3BCBmbitJ6lda3oNdNeHUh486iqaL43bMR2K4TzrspGMRUYXcudUQ9TycBQBrUlT85NRY9TeOw",
    use:"sig"
  }

  const payload = `grant_type=authorization_code&code=${authToken}`
  const myvar: IServiceResponse = await _tokenExchange(payload)
  console.dir(myvar)
  // todo - clean up this shit
  let decoded: string | object = {}
  try {
    if ("access_token" in myvar.body) {
      // @ts-ignore
      const newkey = jwkToPem(tempkey2)
      decoded = jwt.verify(myvar.body.access_token, newkey, {algorithms: ['RS256']})
    }
  } catch (err) {
    console.log(err)
  }




  console.log(decoded)
  return myvar

    // .then(res => {
    //   return res.body
    // })
    // .catch(err => {
    //   console.error(err)
    //   throw new Error(err)
    // })
  // const { CharacterID, CharacterName, Scopes } = await _tokenVerify(access_token, bundle.userAgent)
  // .then(res => {
  //   return res.body
  // })
  // .catch(err => {
  //   console.error(err)
  //   throw new Error(err)
  // })
  // const savedSuccess = bundle.db.saveNewToken({ expiration, access_token, refresh_token, CharacterID, CharacterName, Scopes })
  // if (savedSuccess) {
  //   return {toonID: CharacterID}
  // } else {
  //   return { expiration, access_token, refresh_token, CharacterID, CharacterName, Scopes }
  // }
}

export {
  _buildRequestURL,
  _processAuthToken
}
