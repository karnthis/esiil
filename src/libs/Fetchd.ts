import fetch, {RequestInit} from "node-fetch";
import Defaults from '../defaults'
import ISendOpts from "../interfaces/SendOpts";
import {_cleanURL, _paramsToString} from './FetchdHelpers'
import IExtraParametersWithSig from "../interfaces/ExtraParametersWithSig";
import ISendTokenOpts from "../interfaces/SendTokenOpts";
import IServiceResponse from "../interfaces/ServiceResponse";


function _basicGet(path: string, extraParams: IExtraParametersWithSig) {
    const options = {
        method: 'GET',
        headers: {
            'User-Agent': Defaults.userAgent
        }
    }
    const url = `${Defaults.domainAndVersion}${_cleanURL(path)}${Defaults.queryParamStart}${_paramsToString(extraParams)}`
    return doFetch(url, options)
}
function _sendPathRequest(path: string, extraParams: IExtraParametersWithSig, options: RequestInit, payload?: object) {
    const sendOpts: ISendOpts = {
        method: options.method || 'GET',
        headers: {...options.headers, ...{'User-Agent': Defaults.userAgent}},
    }
    if (payload) sendOpts.body = JSON.stringify(payload)
    const url: string = `${Defaults.domainAndVersion}${_cleanURL(path)}${Defaults.queryParamStart}${_paramsToString(extraParams)}`
    return doFetch(url, sendOpts)
}
function _sendCustomRequest(url: string, options: RequestInit, payload: object = {}) {
    const sendOpts: ISendOpts = {
        method: options.method || 'GET',
        headers: {...options.headers, ...{'User-Agent': Defaults.userAgent}},
        body: JSON.stringify(payload),
    }
    return doFetch(url, sendOpts)
}

function _sendTokenRequest(url: string, options: RequestInit, payload: string) {
    const sendOpts: ISendTokenOpts = {
        method: 'POST',
        headers: {...options.headers, ...{'User-Agent': Defaults.userAgent}},
        body: payload,
    }
    return doFetch(url, sendOpts)
}


function doFetch(url: string, options: RequestInit): Promise<IServiceResponse> {
    return fetch(url, options)
        .then(resp => {
            const serviceResponse: IServiceResponse = {
                body: {},
                headers: resp.headers.raw(),
                status: resp.status,
                statusText: resp.statusText,
            }
            if (resp.headers.get('Content-Type') == 'application/json; charset=utf-8') {
                serviceResponse.body = resp.json()
                return serviceResponse
            } else {
                serviceResponse.body = resp.text()
                return serviceResponse
            }
        })
}



export {
    _basicGet,
    _sendPathRequest,
    _sendCustomRequest,
    _sendTokenRequest,
    doFetch
}