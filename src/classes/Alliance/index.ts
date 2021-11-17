import Core from '../Core'
import {basePath} from "./allianceHelper";
import IInstanceConfig from "../../interfaces/InstanceConfig";
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";

export default class Alliance extends Core.CoreClass {
  constructor(cfg: IInstanceConfig) {
    super(cfg)
  }

  all(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/`, extraParameters)
  }
  one(allianceID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/${allianceID}`, extraParameters)
  }
  memberCorps(allianceID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/${allianceID}/corporations/`, extraParameters)
  }
  images(allianceID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/${allianceID}/icons/`, extraParameters)
  }

  contacts(allianceID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${allianceID}/contacts/labels/`, sessionToken, extraParameters)
  }
  contactLabels(allianceID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${allianceID}/contacts/labels/`, sessionToken, extraParameters)
  }
}

