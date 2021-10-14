import Core from '../Core'
import { basePath } from './warHelper'
import IInstanceConfig from "../../interfaces/InstanceConfig";
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";

export default class War extends Core.CoreClass {
  constructor(cfg: IInstanceConfig) {
    super(cfg)
  }

  all(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/`, extraParameters)
  }
  one(warID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/${warID}`, extraParameters)
  }
  killmails(warID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/${warID}/killmails/`, extraParameters)
  }
}

