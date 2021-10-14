import Core from '../Core'
import {basePath} from './dogmaHelper'
import IInstanceConfig from "../../interfaces/InstanceConfig";
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";

export default class Dogma extends Core.CoreClass {
  constructor(cfg: IInstanceConfig) {
    super(cfg)
  }

  allAttributes(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/attributes/`, extraParameters)
  }
  allEffects(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/effects/`, extraParameters)
  }
  oneAttribute(attributeID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/attributes/${attributeID}/`, extraParameters)
  }
  oneEffect(effectID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/effects/${effectID}/`, extraParameters)
  }
  dynamic(typeID: number, itemID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/dynamic/items/${typeID}/${itemID}/`, extraParameters)
  }
}