import Core from '../Core'
import {basePath} from './marketHelper'
import IInstanceConfig from "../../interfaces/InstanceConfig";
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";

export default class Market extends Core.CoreClass {
  constructor(cfg: IInstanceConfig) {
    super(cfg)
  }

  groups(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/groups/`, extraParameters)
  }
  prices(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/prices/`, extraParameters)
  }
  history(regionID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/${regionID}/history/`, extraParameters)
  }
  types(regionID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/${regionID}/types/`, extraParameters)
  }
  group(marketGroupID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/groups/${marketGroupID}/`, extraParameters)
  }
  orders(regionID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/${regionID}/orders/`, extraParameters)
  }
}

