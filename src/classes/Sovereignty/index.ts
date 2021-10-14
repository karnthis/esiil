import Core from '../Core'
import { basePath } from './sovereigntyHelper'
import IInstanceConfig from "../../interfaces/InstanceConfig";
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";

export default class Sovereignty extends Core.CoreClass {
  constructor(cfg: IInstanceConfig) {
    super(cfg)
  }

  campaigns(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/campaigns/`, extraParameters)
  }
  map(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/map/`, extraParameters)
  }
  structures(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/structures/`, extraParameters)
  }
}

