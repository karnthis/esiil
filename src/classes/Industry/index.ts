import Core from '../Core'
import {basePath} from './industryHelper'
import IInstanceConfig from "../../interfaces/InstanceConfig";
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";


export default class Industry extends Core.CoreClass {
  constructor(cfg: IInstanceConfig) {
    super(cfg)
  }

  facilities(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/facilities/`, extraParameters)
  }
  systems(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/systems/`, extraParameters)
  }
}

