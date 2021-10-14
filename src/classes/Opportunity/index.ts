import Core from '../Core'
import { basePath } from './opportunityHelper'
import IInstanceConfig from "../../interfaces/InstanceConfig";
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";

export default class Opportunity extends Core.CoreClass {
  constructor(cfg: IInstanceConfig) {
    super(cfg)
  }

  groups(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/groups/`, extraParameters)
  }
  group(groupID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/groups/${groupID}/`, extraParameters)
  }
  tasks(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/tasks/`, extraParameters)
  }
  task(taskID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/tasks/${taskID}/`, extraParameters)
  }
}

