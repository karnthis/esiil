import Defaults from '../defaults'
import { _sendTokenRequest } from '../libs/Fetchd'
import ISendTokenOpts from "../interfaces/SendTokenOpts";
import ITokenServiceResponse from "../interfaces/responses/TokenServiceResponse";

function _tokenExchange(payload: string): Promise<ITokenServiceResponse> {
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

function _tokenRefresh(payload: string): Promise<ITokenServiceResponse> {
  const sendOpts: ISendTokenOpts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Host: 'login.eveonline.com'
    }
  }
  return _sendTokenRequest(`${Defaults.oauthURL}/token`, sendOpts, payload)
}

export {
  _tokenExchange,
  _tokenRefresh
}