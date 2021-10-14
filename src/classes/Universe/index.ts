import Core from'../Core'
import { basePath } from './universeHelper'
import IInstanceConfig from "../../interfaces/InstanceConfig";
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";

export default class Universe extends Core.CoreClass {
  constructor(cfg: IInstanceConfig) {
    super(cfg)
  }

  piSchematics(schematicsID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/schematics/${schematicsID}/`, extraParameters)
  }
  name2ID(namesArray: [], extraParameters: IExtraParametersWithSig) {
    return Core._makePublicPost(`${basePath}/ids/`, namesArray, extraParameters)
  }

}

