import Core from '../Core'
import {basePath} from "./corpHelper";
import IInstanceConfig from "../../interfaces/InstanceConfig";
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";

export default class Corp extends Core.CoreClass {
  constructor(cfg: IInstanceConfig) {
    super(cfg)
  }
  // PUBLIC
  one(corporationID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/${corporationID}/`, extraParameters)
  }
  allianceHistory(corporationID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/${corporationID}/alliancehistory/`, extraParameters)
  }
  images(corporationID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/${corporationID}/icons/`, extraParameters)
  }
  npc(extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/npccorps/`, extraParameters)
  }
  // AUTHED
  assets(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/assets/`, sessionToken, extraParameters)
  }
  assetLocations(corporationID: number, itemArray: number[], sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedPost(`${basePath}/${corporationID}/assets/locations/`, sessionToken, itemArray, extraParameters)
  }
  assetNames(corporationID: number, itemArray: number[], sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedPost(`${basePath}/${corporationID}/assets/names/`, sessionToken, itemArray, extraParameters)
  }
  blueprints(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/blueprints/`, sessionToken, extraParameters)
  }
  bookmarks(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/bookmarks/`, sessionToken, extraParameters)
  }
  bookmarkFolders(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/bookmarks/folders/`, sessionToken, extraParameters)
  }
  contacts(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/contacts/`, sessionToken, extraParameters)
  }
  contactLabels(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/contacts/labels/`, sessionToken, extraParameters)
  }
  containers(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/containers/logs/`, sessionToken, extraParameters)
  }
  contracts(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/contracts/`, sessionToken, extraParameters)
  }
  contractBids(corporationID: number, sessionToken: string, contractID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/contracts/${contractID}/bids/`, sessionToken, extraParameters)
  }
  contractItems(corporationID: number, sessionToken: string, contractID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/contracts/${contractID}/items/`, sessionToken, extraParameters)
  }
  divisions(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/divisions/`, sessionToken, extraParameters)
  }
  facilities(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/facilities/`, sessionToken, extraParameters)
  }
  factionWarfare(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/fw/stats/`, sessionToken, extraParameters)
  }
  medals(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/medals/`, sessionToken, extraParameters)
  }
  medalsIssued(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/medals/issued/`, sessionToken, extraParameters)
  }
  members(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/members/`, sessionToken, extraParameters)
  }
  memberLimit(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/members/limit/`, sessionToken, extraParameters)
  }
  memberTitles(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/members/titles/`, sessionToken, extraParameters)
  }
  memberTracking(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/memberTracking/`, sessionToken, extraParameters)
  }
  roles(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/roles/`, sessionToken, extraParameters)
  }
  rolesHistory(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/roles/history/`, sessionToken, extraParameters)
  }
  shareholders(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/shareholders/`, sessionToken, extraParameters)
  }
  standings(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/standings/`, sessionToken, extraParameters)
  }
  starbases(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/starbases/`, sessionToken, extraParameters)
  }
  structures(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/structures/`, sessionToken, extraParameters)
  }
  titles(corporationID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${corporationID}/titles/`, sessionToken, extraParameters)
  }
}