import {_tokenExchange, _tokenRefresh} from './helpers/Token'
import {importJWK, jwtVerify, JWK} from 'jose'
import ICcpJwt from "./interfaces/CcpJwt";
import ITokenResponseBody from "./interfaces/responses/TokenResponseBody";
import Defaults from './defaults'
import ITokenServiceResponse from "./interfaces/responses/TokenServiceResponse";

async function _processAuthToken(authToken: string, ccpToken: ICcpJwt) {
  const payload = `grant_type=authorization_code&code=${authToken}`
  return _handleTokens(await _tokenExchange(payload), ccpToken)
}
async function _refreshTheToken(refreshToken: string, ccpToken: ICcpJwt) {
  const payload = [
    `grant_type=refresh_token`,
    `refresh_token=${refreshToken}`,
    `client_id=${Defaults.clientID}`
  ].join('&')
  return _handleTokens(await _tokenRefresh(payload), ccpToken)
}
async function _reduceScope(refreshToken: string, ccpToken: ICcpJwt, updatedScopes: string[]) {
  const payload = [
    `grant_type=refresh_token`,
    `refresh_token=${refreshToken}`,
    `client_id=${Defaults.clientID}`,
    `scope=${encodeURIComponent(updatedScopes.join(' '))}`
  ].join('&')
  return _handleTokens(await _tokenRefresh(payload), ccpToken)
}


async function _handleTokens(rawSessionToken: ITokenServiceResponse, ccpToken: ICcpJwt): Promise<ITokenResponseBody> {
  try {
    if (typeof rawSessionToken.body === 'string') {
      throw new Error(`Not a valid object: ${rawSessionToken.body}`)
    }
    if ("access_token" in rawSessionToken.body) {
      const verification = await _doVerify(ccpToken, rawSessionToken.body.access_token)
      if (verification.iss == 'login.eveonline.com') {
        return rawSessionToken.body
      } else {
        throw new Error(`Could not verify JWT`)
      }
    }
  } catch (err) {
    console.log('err')
    console.log(err)
  }
  return {
    access_token: '',
    expires_in: 0,
    token_type: '',
    refresh_token: ''
  }
}

async function _doVerify(ccpToken: ICcpJwt, accessToken: string) {
  const ccpJwk = await importJWK(_ccpToJwk(ccpToken), 'RS256')
  const { payload, protectedHeader } = await jwtVerify(accessToken, ccpJwk, {})
  return payload
}

function _ccpToJwk(token: ICcpJwt): JWK {
  return {
    kty: token.kty,
    e: token.e,
    n:token.n
  }
}

export {
  _processAuthToken,
  _refreshTheToken,
  _reduceScope
}
