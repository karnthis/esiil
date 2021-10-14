import Core from '../Core'
import {basePath} from "./factionWarfareHelper";
import IInstanceConfig from "../../interfaces/InstanceConfig";
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";

export default class FactionWarfare extends Core.CoreClass {
  constructor(cfg: IInstanceConfig) {
    super(cfg)
  }

  factionLeaderboard(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/leaderboards/`, extraParameters)
  }
  characterLeaderboard(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/leaderboards/characters/`, extraParameters)
  }
  corporationLeaderboard(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/leaderboards/corporations/`, extraParameters)
  }
  stats(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/stats/`, extraParameters)
  }
  systems(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/systems/`, extraParameters)
  }
  wars(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/wars/`, extraParameters)
  }
}

