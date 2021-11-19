import Core from'../Core'
import { basePath } from './universeHelper'
import IInstanceConfig from "../../interfaces/InstanceConfig";
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";
import IName2IdServiceResponse from "../../interfaces/responses/universe/Name2IdServiceResponse";

export default class Universe extends Core.CoreClass {
  constructor(cfg: IInstanceConfig) {
    super(cfg)
  }

  piSchematics(schematicsID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/schematics/${schematicsID}/`, extraParameters)
  }
  async name2ID(namesArray: string[], extraParameters?: IExtraParametersWithSig): Promise<IName2IdServiceResponse> {
    return await Core._makePublicPost(`${basePath}/ids/`, namesArray, extraParameters) as IName2IdServiceResponse
  }
  ids2Name(idsArray: number[], extraParameters: IExtraParametersWithSig) {
    return Core._makePublicPost(`${basePath}/names/`, idsArray, extraParameters)
  }

}

