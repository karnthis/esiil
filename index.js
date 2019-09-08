const Core = require('./libs/Core')
const { Icons } = require('./classes/Groups')
const Authenticate = require('./classes/Authenticate')
const Character = require('./classes/Character')

module.exports = {
  Authenticate,
  Character
}


class Main extends Core {
  constructor(cfg = {}) {
    const { base, ver, src, agent, db } = cfg
    super({ base, ver, src, agent, db })

    

    this.images = new Icons({})
    
  }

  // **** UTIL FUNCTIONS **** \\


  // makeAuthedPost() {
  //   const options = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${accessToken}`
  //     },
  //   }
  // }
  // makeAuthedPut() {
  //   const options = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${accessToken}`
  //     },
  //   }
  // }
  




  // **** END UTIL FUNCTIONS **** \\

  // **** PUBLIC ROUTES **** \\
  // ALLIANCE
  alliances() {
    return this.makePublicGet(`alliances/`)
  }
  alliance(alliance_id) {
    return this.makePublicGet(`alliances/${alliance_id}`)
  }
  allianceCorps(alliance_id) {
    return this.makePublicGet(`alliances/${alliance_id}/corporations/`)
  }

  // CHARACTER
  character(character_id) {
    return this.makePublicGet(`characters/${character_id}/`)
  }
  characterCorpHistory(character_id) {
    return this.makePublicGet(`characters/${character_id}/corporationhistory/`)
  }
  // TODO	make post
  characterzz(character_id) {
    return this.makePublicGet(`characters/${character_id}/`)
  }

  // CONTRACTS
  contractsPublic(region_id) {
    return this.makePublicGet(`contracts/public/${region_id}/`)
  }
  contractPublicBids(contract_id) {
    return this.makePublicGet(`contracts/public/bids/${contract_id}/`)
  }
  contractPublicItems(contract_id) {
    return this.makePublicGet(`contracts/public/items/${contract_id}/`)
  }

  // CORPS
  // corporations/{corporation_id}/
  corp(corporation_id) {
    return this.makePublicGet(`corporations/${corporation_id}/`)
  }
  corpAllianceHistory(corporation_id) {
    return this.makePublicGet(`corporations/${corporation_id}/alliancehistory/`)
  }
  //TODO	better name
  allNPCCorps() {
    return this.makePublicGet(`corporations/npccorps/`)
  }

  // DOGMA
  dogmaAttributes() {
    return this.makePublicGet(`dogma/attributes/`)
  }
  dogmaAttribute(attribute_id) {
    return this.makePublicGet(`dogma/attributes/${attribute_id}/`)
  }
  dogmaDynamic(type_id, item_id) {
    return this.makePublicGet(`dogma/dynamic/items/${type_id}/${item_id}/`)
  }
  dogmaEffects() {
    return this.makePublicGet(`dogma/effects/`)
  }
  dogmaEffect(effect_id) {
    return this.makePublicGet(`dogma/effects/${effect_id}/`)
  }

  // FACTION WARFARE
  fwFactionLeaderboard() {
    return this.makePublicGet(`fw/leaderboards/`)
  }
  fwCharacterLeaderboard() {
    return this.makePublicGet(`fw/leaderboards/characters/`)
  }
  fwCorporationLeaderboard() {
    return this.makePublicGet(`fw/leaderboards/corporations/`)
  }
  fwStats() {
    return this.makePublicGet(`fw/stats/`)
  }
  fwSystems() {
    return this.makePublicGet(`fw/systems/`)
  }
  fwWars() {
    return this.makePublicGet(`fw/wars/`)
  }

  // INCURSIONS
  incursions() {
    return this.makePublicGet(`incursions/`)
  }

  // INDUSTRY
  industryFacilities() {
    return this.makePublicGet(`industry/facilities/`)
  }
  industrySystems() {
    return this.makePublicGet(`industry/systems/`)
  }

  // INSURANCE
  insurance() {
    return this.makePublicGet(`insurance/prices/`)
  }

  // KILLMAILS
  killmail(killmail_id, killmail_hash) {
    return this.makePublicGet(`killmails/${killmail_id}/${killmail_hash}/`)
  }

  // LOYALITY
  loyaltyStores(corporation_id) {
    return this.makePublicGet(`loyalty/stores/${corporation_id}/offers/`)
  }

  // MARKET
  marketHistory(region_id) {
    return this.makePublicGet(`markets/${region_id}/history/`)
  }
  marketOrders(region_id) {
    return this.makePublicGet(`markets/${region_id}/orders/`)
  }
  marketTypes(region_id) {
    return this.makePublicGet(`markets/${region_id}/types/`)
  }
  marketGroups() {
    return this.makePublicGet(`markets/groups/`)
  }
  marketGroup(market_group_id) {
    return this.makePublicGet(`markets/groups/${market_group_id}/`)
  }
  marketPrices() {
    return this.makePublicGet(`markets/prices/`)
  }

  // OPPORTUNITIES
  groups() {
    return this.makePublicGet(`opportunities/groups/`)
  }
  group(group_id) {
    return this.makePublicGet(`opportunities/groups/${group_id}/`)
  }
  tasks() {
    return this.makePublicGet(`opportunities/tasks/`)
  }
  task(task_id) {
    return this.makePublicGet(`opportunities/tasks/${task_id}/`)
  }

  // PLANETARY INTERACTION
  schematics(schematics_id) {
    return this.makePublicGet(`universe/schematics/${schematics_id}/`)
  }

  // ROUTES
  route(origin_id, destination_id) {
    return this.makePublicGet(`route/${origin_id}/${destination_id}/`)
  }

  // SEARCH
  seach() {
    return this.makePublicGet(`search/`)
  }

  // SOVEREIGNTY
  sovereigntyCampaigns() {
    return this.makePublicGet(`sovereignty/campaigns/`)
  }
  sovereigntyMap() {
    return this.makePublicGet(`sovereignty/map/`)
  }
  sovereigntyStructures() {
    return this.makePublicGet(`sovereignty/structures/`)
  }

  // STATUS
  status() {
    return this.makePublicGet(`status/`)
  }

  // UNIVERSE
  // TODO flesh out universe data pull
  id2Name(options = {}, payload = []) {
    return this.publicPost(`universe/ids/`, options, JSON.stringify(payload))
  }

  // WARS
  wars() {
    return this.makePublicGet(`wars/`)
  }
  war(war_id) {
    return this.makePublicGet(`wars/${war_id}/`)
  }
  warKillmails(war_id) {
    return this.makePublicGet(`wars/${war_id}/killmails/`)
  }
  // ****  END PUBLIC ROUTES **** \\

  // **** PROTECTED ROUTES **** \\

  // CHARACTER



  // CONTRACTS
  

  // **** END PROTECTED ROUTES **** \\


}
