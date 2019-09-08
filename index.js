const Core = require('./libs/Core')
const { Icons } = require('./classes/Groups')
const Authenticate = require('./classes/Authenticate')

module.exports = {
  Authenticate,
  // Main
}


class Main extends Core {
  constructor(cfg = {}) {
    const { base, ver, src, agent, db } = cfg
    super({ base, ver, src, agent, db })

    

    this.images = new Icons({})
    
  }

  // **** UTIL FUNCTIONS **** \\

  async makeAuthedGet(path, toonID) {
    let { access_token, expires, refresh_token } = await this.database.toon2token2(toonID)
    console.log('token: ',access_token)
    if (nowInSeconds() >= expires) {
    console.log('refresh hit')
    access_token = this.refreshToken(refresh_token)
    }
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
    }
    return this.restrictedGet(path, options)
  }
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
    return this.basicGet(`alliances/`)
  }
  alliance(alliance_id) {
    return this.basicGet(`alliances/${alliance_id}`)
  }
  allianceCorps(alliance_id) {
    return this.basicGet(`alliances/${alliance_id}/corporations/`)
  }

  // CHARACTER
  character(character_id) {
    return this.basicGet(`characters/${character_id}/`)
  }
  characterCorpHistory(character_id) {
    return this.basicGet(`characters/${character_id}/corporationhistory/`)
  }
  // TODO	make post
  characterzz(character_id) {
    return this.basicGet(`characters/${character_id}/`)
  }

  // CONTRACTS
  contractsPublic(region_id) {
    return this.basicGet(`contracts/public/${region_id}/`)
  }
  contractPublicBids(contract_id) {
    return this.basicGet(`contracts/public/bids/${contract_id}/`)
  }
  contractPublicItems(contract_id) {
    return this.basicGet(`contracts/public/items/${contract_id}/`)
  }

  // CORPS
  // corporations/{corporation_id}/
  corp(corporation_id) {
    return this.basicGet(`corporations/${corporation_id}/`)
  }
  corpAllianceHistory(corporation_id) {
    return this.basicGet(`corporations/${corporation_id}/alliancehistory/`)
  }
  //TODO	better name
  allNPCCorps() {
    return this.basicGet(`corporations/npccorps/`)
  }

  // DOGMA
  dogmaAttributes() {
    return this.basicGet(`dogma/attributes/`)
  }
  dogmaAttribute(attribute_id) {
    return this.basicGet(`dogma/attributes/${attribute_id}/`)
  }
  dogmaDynamic(type_id, item_id) {
    return this.basicGet(`dogma/dynamic/items/${type_id}/${item_id}/`)
  }
  dogmaEffects() {
    return this.basicGet(`dogma/effects/`)
  }
  dogmaEffect(effect_id) {
    return this.basicGet(`dogma/effects/${effect_id}/`)
  }

  // FACTION WARFARE
  fwFactionLeaderboard() {
    return this.basicGet(`fw/leaderboards/`)
  }
  fwCharacterLeaderboard() {
    return this.basicGet(`fw/leaderboards/characters/`)
  }
  fwCorporationLeaderboard() {
    return this.basicGet(`fw/leaderboards/corporations/`)
  }
  fwStats() {
    return this.basicGet(`fw/stats/`)
  }
  fwSystems() {
    return this.basicGet(`fw/systems/`)
  }
  fwWars() {
    return this.basicGet(`fw/wars/`)
  }

  // INCURSIONS
  incursions() {
    return this.basicGet(`incursions/`)
  }

  // INDUSTRY
  industryFacilities() {
    return this.basicGet(`industry/facilities/`)
  }
  industrySystems() {
    return this.basicGet(`industry/systems/`)
  }

  // INSURANCE
  insurance() {
    return this.basicGet(`insurance/prices/`)
  }

  // KILLMAILS
  killmail(killmail_id, killmail_hash) {
    return this.basicGet(`killmails/${killmail_id}/${killmail_hash}/`)
  }

  // LOYALITY
  loyaltyStores(corporation_id) {
    return this.basicGet(`loyalty/stores/${corporation_id}/offers/`)
  }

  // MARKET
  marketHistory(region_id) {
    return this.basicGet(`markets/${region_id}/history/`)
  }
  marketOrders(region_id) {
    return this.basicGet(`markets/${region_id}/orders/`)
  }
  marketTypes(region_id) {
    return this.basicGet(`markets/${region_id}/types/`)
  }
  marketGroups() {
    return this.basicGet(`markets/groups/`)
  }
  marketGroup(market_group_id) {
    return this.basicGet(`markets/groups/${market_group_id}/`)
  }
  marketPrices() {
    return this.basicGet(`markets/prices/`)
  }

  // OPPORTUNITIES
  groups() {
    return this.basicGet(`opportunities/groups/`)
  }
  group(group_id) {
    return this.basicGet(`opportunities/groups/${group_id}/`)
  }
  tasks() {
    return this.basicGet(`opportunities/tasks/`)
  }
  task(task_id) {
    return this.basicGet(`opportunities/tasks/${task_id}/`)
  }

  // PLANETARY INTERACTION
  schematics(schematics_id) {
    return this.basicGet(`universe/schematics/${schematics_id}/`)
  }

  // ROUTES
  route(origin_id, destination_id) {
    return this.basicGet(`route/${origin_id}/${destination_id}/`)
  }

  // SEARCH
  seach() {
    return this.basicGet(`search/`)
  }

  // SOVEREIGNTY
  sovereigntyCampaigns() {
    return this.basicGet(`sovereignty/campaigns/`)
  }
  sovereigntyMap() {
    return this.basicGet(`sovereignty/map/`)
  }
  sovereigntyStructures() {
    return this.basicGet(`sovereignty/structures/`)
  }

  // STATUS
  status() {
    return this.basicGet(`status/`)
  }

  // UNIVERSE
  // TODO flesh out universe data pull
  id2Name(options = {}, payload = []) {
    return this.publicPost(`universe/ids/`, options, JSON.stringify(payload))
  }

  // WARS
  wars() {
    return this.basicGet(`wars/`)
  }
  war(war_id) {
    return this.basicGet(`wars/${war_id}/`)
  }
  warKillmails(war_id) {
    return this.basicGet(`wars/${war_id}/killmails/`)
  }
  // ****  END PUBLIC ROUTES **** \\

  // **** PROTECTED ROUTES **** \\

  // CHARACTER
  characterMedals(character_id, toonID) {
    return this.makeAuthedGet(`characters/${character_id}/medals/`, toonID)
  }


  // CONTRACTS
  characterContracts(character_id, toonID) {
    return this.makeAuthedGet(`characters/${character_id}/contracts/`, toonID)
  }

  // **** END PROTECTED ROUTES **** \\


}
