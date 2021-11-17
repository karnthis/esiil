import IInstanceConfig from "../../interfaces/InstanceConfig";

import Defaults from '../../defaults'
import {_basicGet, _sendPathRequest} from'../../libs/Fetchd'
import { _buildRequestURL, _loadCcpJwt } from './coreHelper'
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";
import ICcpJwt from "../../interfaces/CcpJwt";
import IServiceResponse from "../../interfaces/responses/ServiceResponse";
import IDataPack from "../../interfaces/DataPack";

class CoreClass {
  public scopes: string[];
  public state: string;
  public callbackURL: string;
  public userAgent: string;
  public clientID: string;
  public clientSecret: string;
  public domainAndVersion: string;
  public queryParamStart: string;
  public ccpJwt: ICcpJwt;

  constructor(cfg: IInstanceConfig) {
    this.scopes = cfg.scopes || []
    this.state = cfg.state || ''
    this.callbackURL = cfg.callbackURL

    this.userAgent = Defaults.userAgent
    this.clientID = Defaults.clientID
    this.clientSecret = Defaults.clientSecret

    this.domainAndVersion = Defaults.domainAndVersion()
    this.queryParamStart = Defaults.queryParamStart()

    this.ccpJwt = {
      alg: '',
      e: '',
      kid: '',
      kty: '',
      n: '',
      use: '',
    };
    this.loadCcpJwt();
  }

  defaultRequestURL(state: string): string {
    return _buildRequestURL({
      scopes: this.scopes,
      state,
      callbackURL: this.callbackURL,
      clientID: this.clientID,
    })
  }
  targetedRequestURL(state: string, scopes: string[]): string {
    return _buildRequestURL({
      scopes,
      state,
      callbackURL: this.callbackURL,
      clientID: this.clientID,
    })
  }

  async loadCcpJwt(): Promise<void> {
    this.ccpJwt = await _loadCcpJwt()
  }

  clone(): IInstanceConfig {
    return {
      userAgent: this.userAgent,
      scopes: this.scopes,
      state: this.state,
      callbackURL: this.callbackURL,
      clientID: this.clientID,
      clientSecret: this.clientSecret,
    }
  }

  dataPack(): IDataPack {
    return {
      userAgent: this.userAgent,
      scopes: this.scopes,
    }
  }
}

// **** FUNCTIONS **** \\
function _makePublicGet(path: string, extraParameters: IExtraParametersWithSig = {}): Promise<IServiceResponse> {
  return _basicGet(path, extraParameters)
}
// TODO verify accuracy
function _makePublicPost(path: string, payload: object, extraParameters: IExtraParametersWithSig = {}): Promise<IServiceResponse> {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return _sendPathRequest(path, extraParameters, options, payload)
}

async function _makeAuthedGet(path: string, sessionToken: string, extraParameters: IExtraParametersWithSig = {}): Promise<IServiceResponse> {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionToken}`
    },
  }
  return _sendPathRequest(path, extraParameters, options)
}

async function _makeAuthedPost(path: string, sessionToken: string, payload: object, extraParameters: IExtraParametersWithSig = {}): Promise<IServiceResponse> {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionToken}`
    },
  }
  return _sendPathRequest(path, extraParameters, options, payload)
}

async function _makeAuthedPut(path: string, sessionToken: string, payload: object, extraParameters: IExtraParametersWithSig = {}): Promise<IServiceResponse> {
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
async function _makeAuthedDelete(path: string, sessionToken: string, extraParameters: IExtraParametersWithSig = {}): Promise<IServiceResponse> {
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
