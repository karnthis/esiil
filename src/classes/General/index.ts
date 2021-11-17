import Core from '../Core'
import IInstanceConfig from "../../interfaces/InstanceConfig";
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";

export default class General extends Core.CoreClass {
  constructor(cfg: IInstanceConfig) {
    super(cfg)
  }

  incursions(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`incursions/`, extraParameters)
  }
  insurance(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`insurance/prices/`, extraParameters)
  }
  search(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`search/`, extraParameters)
  }
  status(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`status/`, extraParameters)
  }
  lpStore(corporationID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`loyalty/stores/${corporationID}/offers/`, extraParameters)
  }
  oneKillmail(killmailID: number, killmailHash: string, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`killmails/${killmailID}/${killmailHash}/`, extraParameters)
  }
  route(originID: number, destinationID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`route/${originID}/${destinationID}/`, extraParameters)
  }
}

