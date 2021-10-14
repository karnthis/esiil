import Core from '../Core'
import { basePath } from './contractHelper'
import IInstanceConfig from "../../interfaces/InstanceConfig";
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";

export default class Contract extends Core.CoreClass {
  constructor(cfg: IInstanceConfig) {
    super(cfg)
  }

  allInRegion(regionID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/${regionID}/`, extraParameters)
  }
  bids(contractID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/bids/${contractID}/`, extraParameters)
  }
  items(contractID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/items/${contractID}/`, extraParameters)
  }
}