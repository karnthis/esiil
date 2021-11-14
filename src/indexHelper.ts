import { _tokenExchange } from './helpers/Token'
import jwt from 'jsonwebtoken'
import jwkToPem from 'jwk-to-pem'
import IServiceResponse from "./interfaces/ServiceResponse";

async function _processAuthToken(authToken: string = '', token: object) {
  const payload = `grant_type=authorization_code&code=${authToken}`
  const rawSessionToken: IServiceResponse = await _tokenExchange(payload)
  let decoded: string | object = {}
  try {
    if (typeof rawSessionToken.body === 'string') {
      throw new Error(`Not a valid object: ${rawSessionToken.body}`)
    }
    if ("access_token" in rawSessionToken.body) {
      // @ts-ignore
      const tmpPem = jwkToPem(token)
      decoded = jwt.verify(rawSessionToken.body.access_token, tmpPem, {algorithms: ['RS256']})
    }
  } catch (err) {
    console.log('err')
    console.log(err)
  }
  console.log('decoded')
  console.log(decoded)
  return rawSessionToken
}

export {
  _processAuthToken
}
