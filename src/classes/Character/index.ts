import Core from '../Core'
import {basePath} from "./characterHelper";
import IInstanceConfig from "../../interfaces/InstanceConfig";
import IExtraParametersWithSig from "../../interfaces/ExtraParametersWithSig";

export default class Character extends Core.CoreClass {
  constructor(cfg: IInstanceConfig) {
    super(cfg)
  }
  // PUBLIC
  one(characterID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/${characterID}/`, extraParameters)
  }
  history(characterID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/${characterID}/corporationhistory/`, extraParameters)
  }
  images(characterID: number, extraParameters: IExtraParametersWithSig) {
    return Core._makePublicGet(`${basePath}/${characterID}/portrait/`, extraParameters)
  }
  affiliation(characterIDArray: number[], extraParameters: IExtraParametersWithSig) {
    return Core._makePublicPost(`${basePath}/affiliation/`, characterIDArray, extraParameters)
  }
  // AUTHED
  assets(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/assets/`, sessionToken, extraParameters)
  }
  assetLocations(characterID: number, sessionToken: string, assetsArray: number[], extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedPost(`${basePath}/${characterID}/assets/locations/`, sessionToken, assetsArray, extraParameters)
  }
  assetNames(characterID: number, sessionToken: string, assetsArray: number[], extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedPost(`${basePath}/${characterID}/assets/names/`, sessionToken, assetsArray, extraParameters)
  }
  blueprints(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/blueprints/`, sessionToken, extraParameters)
  }
  bookmarks(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/bookmarks/`, sessionToken, extraParameters)
  }
  bookmarkFolders(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/bookmarks/folders/`, sessionToken, extraParameters)
  }
  clones(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/clones/`, sessionToken, extraParameters)
  }
  contactLabels(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/contacts/labels/`, sessionToken, extraParameters)
  }
  contracts(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/contracts/`, sessionToken, extraParameters)
  }
  contractBids(characterID: number, contractID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/contracts/${contractID}/bids/`, sessionToken, extraParameters)
  }
  contractItems(characterID: number, contractID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/contracts/${contractID}/items/`, sessionToken, extraParameters)
  }
  cspa(characterID: number, sessionToken: string, characterArray: number[], extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedPost(`${basePath}/${characterID}/contracts/`, sessionToken, characterArray, extraParameters)
  }
  factionWarfare(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/fw/stats/`, sessionToken, extraParameters)
  }
  fatigue(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/fatigue/`, sessionToken, extraParameters)
  }
  implants(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/implants/`, sessionToken, extraParameters)
  }
  lp(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/loyalty/points/`, sessionToken, extraParameters)
  }
  medals(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/medals/`, sessionToken, extraParameters)
  }
  notifications(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/notifications/`, sessionToken, extraParameters)
  }
  contactNotifications(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/notifications/contacts/`, sessionToken, extraParameters)
  }
  opportunities(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/opportunities/`, sessionToken, extraParameters)
  }
  planets(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/planets/`, sessionToken, extraParameters)
  }
  research(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/agents_research/`, sessionToken, extraParameters)
  }
  roles(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/roles/`, sessionToken, extraParameters)
  }
  search(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/search/`, sessionToken, extraParameters)
  }
  standings(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/standings/`, sessionToken, extraParameters)
  }
  stats(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/stats/`, sessionToken, extraParameters)
  }
  titles(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/titles/`, sessionToken, extraParameters)
  }
  
  getContacts(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedGet(`${basePath}/${characterID}/contacts/`, sessionToken, extraParameters)
  }
  postContacts(characterID: number, sessionToken: string, contactArray: number[], extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedPost(`${basePath}/${characterID}/contacts/`, sessionToken, contactArray, extraParameters)
  }
  putContacts(characterID: number, sessionToken: string, contactArray: number[], extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedPut(`${basePath}/${characterID}/contacts/`, sessionToken, contactArray, extraParameters)
  }
  deleteContacts(characterID: number, sessionToken: string, extraParameters: IExtraParametersWithSig) {
    return Core._makeAuthedDelete(`${basePath}/${characterID}/contacts/`, sessionToken, extraParameters)
  }
}