import fetch, {RequestInit} from "node-fetch";
import Defaults from '../defaults'
import ISendOpts from "../interfaces/SendOpts";
import {_cleanURL, _paramsToString} from './FetchdHelpers'
import IExtraParametersWithSig from "../interfaces/ExtraParametersWithSig";
import ISendTokenOpts from "../interfaces/SendTokenOpts";
import IServiceResponse from "../interfaces/responses/ServiceResponse";
import ITokenServiceResponse from "../interfaces/responses/TokenServiceResponse";
import ICcpJwtServiceResponse from "../interfaces/responses/CcpJwtServiceResponse";

function _basicGet(path: string, extraParams: IExtraParametersWithSig): Promise<IServiceResponse> {
    const options = {
        method: 'GET',
        headers: {
            'User-Agent': Defaults.userAgent
        }
    }
    const url = `${Defaults.domainAndVersion()}${_cleanURL(path)}${Defaults.queryParamStart()}${_paramsToString(extraParams)}`
    return doFetch(url, options)
}
function _sendPathRequest(path: string, extraParams: IExtraParametersWithSig, options: RequestInit, payload?: object): Promise<IServiceResponse> {
    const sendOpts: ISendOpts = {
        method: options.method || 'GET',
        headers: {...options.headers, ...{'User-Agent': Defaults.userAgent}},
    }
    if (payload) sendOpts.body = JSON.stringify(payload)
    const url: string = `${Defaults.domainAndVersion()}${_cleanURL(path)}${Defaults.queryParamStart()}${_paramsToString(extraParams)}`
    return doFetch(url, sendOpts)
}
function _sendCustomRequest(url: string, options: RequestInit, payload: object = {}): Promise<IServiceResponse> {
    const sendOpts: ISendOpts = {
        method: options.method || 'GET',
        headers: {...options.headers, ...{'User-Agent': Defaults.userAgent}},
        body: JSON.stringify(payload),
    }
    return doFetch(url, sendOpts)
}

async function _sendTokenRequest(url: string, options: RequestInit, payload: string): Promise<ITokenServiceResponse> {
    const sendOpts: ISendTokenOpts = {
        method: 'POST',
        headers: {...options.headers, ...{'User-Agent': Defaults.userAgent}},
        body: payload,
    }
    return await doFetch(url, sendOpts) as ITokenServiceResponse
}

async function _jwtGet(): Promise<ICcpJwtServiceResponse> {
    const options = {
        method: 'GET',
        headers: {
            'User-Agent': Defaults.userAgent
        }
    }
    return await doFetch('https://login.eveonline.com/oauth/jwks', options) as ICcpJwtServiceResponse
}


function doFetch(url: string, options: RequestInit): Promise<IServiceResponse> {
    const result = fetch(url, options)
        .then(async resp => {
            const serviceResponse: IServiceResponse = {
                body: {
                    access_token: '',
                    expires_in: 0,
                    token_type: '',
                    refresh_token: '',
                },
                headers: resp.headers.raw(),
                status: resp.status,
                statusText: resp.statusText,
            }
            if (resp.headers.get('Content-Type') == 'application/json; charset=utf-8') {
                serviceResponse.body = await resp.json()
                return serviceResponse
            } else {
                serviceResponse.body = await resp.text()
                return serviceResponse
            }
        })
    return result
}



export {
    _basicGet,
    _sendPathRequest,
    _sendCustomRequest,
    _sendTokenRequest,
    _jwtGet,
    doFetch
}