import Core from '../Core'
import { basePath, subPath } from './calendarHelper'
import IInstanceConfig from "../../interfaces/InstanceConfig";
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";

export default class Calendar extends Core.CoreClass {
  constructor(cfg: IInstanceConfig) {
    super(cfg)
  }
  // RESTRICTED
  all(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/${subPath}/`, sessionToken, extraParameters)
  }
  one(characterID: number, sessionToken: string, eventID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/${subPath}/${eventID}/`, sessionToken, extraParameters)
  }
  attendees(characterID: number, sessionToken: string, eventID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/${subPath}/${eventID}/attendees/`, sessionToken, extraParameters)
  }
  respond(characterID: number, sessionToken: string, eventID: number, response: string, extraParameters: IExtraParametersWithSig) {
    if (!response.match(/accepted|declined|tentative/)) {
      throw new Error('response must be accepted, declined, or tentative')
    } else {
      return Core._makeAuthedPut(`${basePath}/${characterID}/${subPath}/${eventID}/`, sessionToken, {response}, extraParameters)
    }
  }
}