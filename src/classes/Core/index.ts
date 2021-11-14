import IInstanceConfig from "../../interfaces/InstanceConfig";

import Defaults from '../../defaults'
import {_basicGet, _sendPathRequest} from'../../libs/Fetchd'
import { _buildRequestURL, _loadCcpJwt } from './coreHelper'
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";

class CoreClass {
  public scopes: string[];
  public state: string;
  public callbackURL: string;
  public userAgent: string;
  public clientID: string;
  public clientSecret: string;
  public domainAndVersion: string;
  public queryParamStart: string;
  public ccpJwt: object;
  public loginRequestURL: string;

  constructor(cfg: IInstanceConfig) {
    this.scopes = cfg.scopes || []
    this.state = cfg.state || ''
    this.callbackURL = cfg.callbackURL

    this.userAgent = Defaults.userAgent
    this.clientID = Defaults.clientID
    this.clientSecret = Defaults.clientSecret

    this.domainAndVersion = Defaults.domainAndVersion()
    this.queryParamStart = Defaults.queryParamStart()

    this.ccpJwt = {};
    this.loadCcpJwt();

    this.loginRequestURL = _buildRequestURL({
      scopes: this.scopes,
      state: 'login',
      callbackURL: this.callbackURL,
      clientID: this.clientID
    })
  }

  async loadCcpJwt() {
    this.ccpJwt = await _loadCcpJwt()
  }

  clone() {
    return {
      userAgent: this.userAgent,
      scopes: this.scopes,
      state: this.state,
      callbackURL: this.callbackURL,
      clientID: this.clientID,
      clientSecret: this.clientSecret,
      requestURL: this.loginRequestURL,
    }
  }

  dataPack() {
    return {
      userAgent: this.userAgent,
      scopes: this.scopes,
    }
  }

  scopeRequest(scopes: string[], state: string) {
    return _buildRequestURL({
      scopes: scopes,
      state: state,
      callbackURL: this.callbackURL,
      clientID: this.clientID
    })
  }
}

// **** FUNCTIONS **** \\
function _makePublicGet(path: string, extraParameters: IExtraParametersWithSig = {}) {
  return _basicGet(path, extraParameters)
}
// TODO verify accuracy
function _makePublicPost(path: string, payload: object, extraParameters: IExtraParametersWithSig = {}) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return _sendPathRequest(path, extraParameters, options, payload)
}

async function _makeAuthedGet(path: string, sessionToken: string, extraParameters: IExtraParametersWithSig = {}) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionToken}`
    },
  }
  return _sendPathRequest(path, extraParameters, options)
}

async function _makeAuthedPost(path: string, sessionToken: string, payload: object, extraParameters: IExtraParametersWithSig = {}) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionToken}`
    },
  }
  return _sendPathRequest(path, extraParameters, options, payload)
}

async function _makeAuthedPut(path: string, sessionToken: string, payload: object, extraParameters: IExtraParametersWithSig = {}) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionToken}`
    },
  }
  return _sendPathRequest(path, extraParameters, options, payload)
}
//TODO finish real logic
async function _makeAuthedDelete(path: string, sessionToken: string, extraParameters: IExtraParametersWithSig = {}) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionToken}`
    },
  }
  return _sendPathRequest(path, extraParameters, options)
}

// **** END FUNCTIONS **** \\

// **** END CLASS **** \\


export default {
  CoreClass,
  _makePublicGet,
  _makePublicPost,
  _makeAuthedGet,
  _makeAuthedPost,
  _makeAuthedPut,
  _makeAuthedDelete
}
