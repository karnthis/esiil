const Core = require('./libs/Core')
const { Icons } = require('./classes/Groups')
const SQLEngine = require('./libs/Database')

// import { Core } from './libs/Core'
// import { Tmp } from './libs/authtmp'
// import { Icons } from './libs/Groups'

// import { SQLEngine } from './shared/sqlite'
// // import { myFunc, initDB } from './shared/sqlite'
// // import { initDB, lorem } from './shared/sqlite'
// // import { myFunc, initDB, lorem } from './shared/sqlite'
// // const myDB = new SQLEngine('')
// const myDB = new SQLEngine('memory')
// myDB.initDB()




module.exports = class Main extends Core {
  constructor(cfg = {}) {
    const { base, ver, src, cb, clientID, clientSecret, scope, dbMode } = cfg
    super({ base, ver, src })

    this.callbackURL = cb
    this.clientID = clientID
    this.clientSecret = clientSecret
    this.masterScopes = scope || []

    this.images = new Icons({})
    this.database = new SQLEngine(dbMode)
  }

  // **** UTIL FUNCTIONS **** \\
  tokenPost(options = {}, payload = '') {
    return postRequest(`https://login.eveonline.com/oauth/token`, options, payload)
  }
  


  buildRequestURL(scopes = []) {
    const useScope = (this.masterScopes.length > 0) ? this.masterScopes : scopes
    if (useScope.length == 0) throw new Error('must have at least 1 scope selected')
    return [`${this.baseURL}/oauth/authorize/?response_type=code`,
    `redirect_uri=${encodeURI(this.callbackURL)}`,
    `client_id=${this.clientID}`,
    `scope=${useScope.join(' ')}`].join('&')
  }
  setScope(scopes = []) {
    this.masterScopes = scopes
  }
  getTokens(authToken = '') {
    const options = {
      headers: {
        'Content-Type': 'application/json'
      },
      auth: `${this.clientID}:${this.clientSecret}`
    }
    const payload = JSON.stringify({
        "grant_type":"authorization_code",
        "code":authToken
      })
    return this.tokenPost(options, payload)
  }
  refreshToken(refreshToken = '') {
    const options = {
      headers: {
        'Content-Type': 'application/json'
      },
      auth: `${this.clientID}:${this.clientSecret}`
    }
    const payload = JSON.stringify({
        "grant_type":"refresh_token",
        "code":refreshToken
      })
    return this.tokenPost(options, payload)
  }

  // **** END UTIL FUNCTIONS **** \\

  // **** PUBLIC ROUTES **** \\
  // ALLIANCE
  alliances() {
    return this.basicPublicGet(`alliances/`)
  }
  alliance(alliance_id) {
    return this.basicPublicGet(`alliances/${alliance_id}`)
  }
  allianceCorps(alliance_id) {
    return this.basicPublicGet(`alliances/${alliance_id}/corporations/`)
  }

  // CHARACTER
  character(character_id) {
    return this.basicPublicGet(`characters/${character_id}/`)
  }
  characterCorpHistory(character_id) {
    return this.basicPublicGet(`characters/${character_id}/corporationhistory/`)
  }
  // TODO	make post
  characterzz(character_id) {
    return this.basicPublicGet(`characters/${character_id}/`)
  }

  // CONTRACTS
  contractsPublic(region_id) {
    return this.basicPublicGet(`contracts/public/${region_id}/`)
  }
  contractPublicBids(contract_id) {
    return this.basicPublicGet(`contracts/public/bids/${contract_id}/`)
  }
  contractPublicItems(contract_id) {
    return this.basicPublicGet(`contracts/public/items/${contract_id}/`)
  }

  // CORPS
  // corporations/{corporation_id}/
  corp(corporation_id) {
    return this.basicPublicGet(`corporations/${corporation_id}/`)
  }
  corpAllianceHistory(corporation_id) {
    return this.basicPublicGet(`corporations/${corporation_id}/alliancehistory/`)
  }
  //TODO	better name
  allNPCCorps() {
    return this.basicPublicGet(`corporations/npccorps/`)
  }

  // DOGMA
  dogmaAttributes() {
    return this.basicPublicGet(`dogma/attributes/`)
  }
  dogmaAttribute(attribute_id) {
    return this.basicPublicGet(`dogma/attributes/${attribute_id}/`)
  }
  dogmaDynamic(type_id, item_id) {
    return this.basicPublicGet(`dogma/dynamic/items/${type_id}/${item_id}/`)
  }
  dogmaEffects() {
    return this.basicPublicGet(`dogma/effects/`)
  }
  dogmaEffect(effect_id) {
    return this.basicPublicGet(`dogma/effects/${effect_id}/`)
  }

  // FACTION WARFARE
  fwFactionLeaderboard() {
    return this.basicPublicGet(`fw/leaderboards/`)
  }
  fwCharacterLeaderboard() {
    return this.basicPublicGet(`fw/leaderboards/characters/`)
  }
  fwCorporationLeaderboard() {
    return this.basicPublicGet(`fw/leaderboards/corporations/`)
  }
  fwStats() {
    return this.basicPublicGet(`fw/stats/`)
  }
  fwSystems() {
    return this.basicPublicGet(`fw/systems/`)
  }
  fwWars() {
    return this.basicPublicGet(`fw/wars/`)
  }

  // INCURSIONS
  incursions() {
    return this.basicPublicGet(`incursions/`)
  }

  // INDUSTRY
  industryFacilities() {
    return this.basicPublicGet(`industry/facilities/`)
  }
  industrySystems() {
    return this.basicPublicGet(`industry/systems/`)
  }

  // INSURANCE
  insurance() {
    return this.basicPublicGet(`insurance/prices/`)
  }

  // KILLMAILS
  killmail(killmail_id, killmail_hash) {
    return this.basicPublicGet(`killmails/${killmail_id}/${killmail_hash}/`)
  }

  // LOYALITY
  loyaltyStores(corporation_id) {
    return this.basicPublicGet(`loyalty/stores/${corporation_id}/offers/`)
  }

  // MARKET
  marketHistory(region_id) {
    return this.basicPublicGet(`markets/${region_id}/history/`)
  }
  marketOrders(region_id) {
    return this.basicPublicGet(`markets/${region_id}/orders/`)
  }
  marketTypes(region_id) {
    return this.basicPublicGet(`markets/${region_id}/types/`)
  }
  marketGroups() {
    return this.basicPublicGet(`markets/groups/`)
  }
  marketGroup(market_group_id) {
    return this.basicPublicGet(`markets/groups/${market_group_id}/`)
  }
  marketPrices() {
    return this.basicPublicGet(`markets/prices/`)
  }

  // OPPORTUNITIES
  groups() {
    return this.basicPublicGet(`opportunities/groups/`)
  }
  group(group_id) {
    return this.basicPublicGet(`opportunities/groups/${group_id}/`)
  }
  tasks() {
    return this.basicPublicGet(`opportunities/tasks/`)
  }
  task(task_id) {
    return this.basicPublicGet(`opportunities/tasks/${task_id}/`)
  }

  // PLANETARY INTERACTION
  schematics(schematics_id) {
    return this.basicPublicGet(`universe/schematics/${schematics_id}/`)
  }

  // ROUTES
  route(origin_id, destination_id) {
    return this.basicPublicGet(`route/${origin_id}/${destination_id}/`)
  }

  // SEARCH
  seach() {
    return this.basicPublicGet(`search/`)
  }

  // SOVEREIGNTY
  sovereigntyCampaigns() {
    return this.basicPublicGet(`sovereignty/campaigns/`)
  }
  sovereigntyMap() {
    return this.basicPublicGet(`sovereignty/map/`)
  }
  sovereigntyStructures() {
    return this.basicPublicGet(`sovereignty/structures/`)
  }

  // STATUS
  status() {
    return this.basicPublicGet(`status/`)
  }

  // UNIVERSE
  // TODO flesh out universe data pull
  id2Name(options = {}, payload = []) {
    return this.basicPublicPost(`universe/ids/`, options, JSON.stringify(payload))
  }

  // WARS
  wars() {
    return this.basicPublicGet(`wars/`)
  }
  war(war_id) {
    return this.basicPublicGet(`wars/${war_id}/`)
  }
  warKillmails(war_id) {
    return this.basicPublicGet(`wars/${war_id}/killmails/`)
  }

  // ****  END PUBLIC ROUTES **** \\

  // **** PROTECTED ROUTES **** \\

  // CONTRACTS
  characterContracts(character_id) {
    return this.basicRestrictedCall(`characters/${character_id}/contracts/`)
  }

  // **** END PROTECTED ROUTES **** \\


}
