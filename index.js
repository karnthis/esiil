const Core = require('./libs/Core')
const { Icons } = require('./classes/Groups')
const SQLEngine = require('./libs/Database')

module.exports = class Main extends Core {
  constructor(cfg = {}) {
    const { base, ver, src, agent, cb, clientID, clientSecret, scope, dbMode } = cfg
    super({ base, ver, src, agent })

    this.callbackURL = cb
    this.clientID = clientID
    this.clientSecret = clientSecret
    this.masterScopes = scope || []

    this.tokenOptions = {
      headers: {
        'Content-Type': 'application/json'
      },
      auth: `${this.clientID}:${this.clientSecret}`
    }

    this.images = new Icons({})
    this.database = new SQLEngine(dbMode)
  }

  // **** UTIL FUNCTIONS **** \\
  makeTokenPost(options = {}, payload = '') {
    return this.tokenPost(`https://login.eveonline.com/oauth/token`, options, payload)
  }
  makeTokenVerify(accessToken) {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    }
    return this.tokenGet(`https://login.eveonline.com/oauth/verify`, options)
  }
  async makeAuthedGet(path, toonID) {
    let { access_token, expires, refresh_token } = await this.database.toon2token2(toonID)
    console.log('token: ',access_token)
    if (riteMeow() >= expires) {
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
  makeAuthedPost() {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    }
  }
  makeAuthedPut() {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    }
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
  async processAuthToken(authToken = '') {
    const expiration = riteMeow() + 1200
    const payload = JSON.stringify({
        "grant_type":"authorization_code",
        "code":authToken
      })
    const { access_token, refresh_token } = await this.makeTokenPost(this.tokenOptions, payload)
      .then(res => {
        console.dir(res)
        return res.body
      })
      .catch(err => {
        console.error(err)
        throw new Error(err)
      })
    const { CharacterID, CharacterName, Scopes } = await this.makeTokenVerify(access_token)
    .then(res => {
      console.dir(res)
      return res.body
    })
    .catch(err => {
      console.error(err)
      throw new Error(err)
    })
    // console.dir(Scopes)
    this.database.saveNewToken({ expiration, access_token, refresh_token, CharacterID, CharacterName, Scopes })
    return {toonID: CharacterID}
  }




  async refreshToken(refreshToken = '') {
    const payload = JSON.stringify({
        "grant_type":"refresh_token",
        "code":refreshToken
      })
    const { access_token, refresh_token } = await this.makeTokenPost(this.tokenOptions, payload)
      .then(res => res.body)
      .catch(err => {
        console.error(err)
        throw new Error(err)
      })
    this.database.saveRefreshedToken(access_token, refresh_token)
    return access_token
  }
  // **** END UTIL FUNCTIONS **** \\

  // **** PUBLIC ROUTES **** \\
  // ALLIANCE
  alliances() {
    return this.publicGet(`alliances/`)
  }
  alliance(alliance_id) {
    return this.publicGet(`alliances/${alliance_id}`)
  }
  allianceCorps(alliance_id) {
    return this.publicGet(`alliances/${alliance_id}/corporations/`)
  }

  // CHARACTER
  character(character_id) {
    return this.publicGet(`characters/${character_id}/`)
  }
  characterCorpHistory(character_id) {
    return this.publicGet(`characters/${character_id}/corporationhistory/`)
  }
  // TODO	make post
  characterzz(character_id) {
    return this.publicGet(`characters/${character_id}/`)
  }

  // CONTRACTS
  contractsPublic(region_id) {
    return this.publicGet(`contracts/public/${region_id}/`)
  }
  contractPublicBids(contract_id) {
    return this.publicGet(`contracts/public/bids/${contract_id}/`)
  }
  contractPublicItems(contract_id) {
    return this.publicGet(`contracts/public/items/${contract_id}/`)
  }

  // CORPS
  // corporations/{corporation_id}/
  corp(corporation_id) {
    return this.publicGet(`corporations/${corporation_id}/`)
  }
  corpAllianceHistory(corporation_id) {
    return this.publicGet(`corporations/${corporation_id}/alliancehistory/`)
  }
  //TODO	better name
  allNPCCorps() {
    return this.publicGet(`corporations/npccorps/`)
  }

  // DOGMA
  dogmaAttributes() {
    return this.publicGet(`dogma/attributes/`)
  }
  dogmaAttribute(attribute_id) {
    return this.publicGet(`dogma/attributes/${attribute_id}/`)
  }
  dogmaDynamic(type_id, item_id) {
    return this.publicGet(`dogma/dynamic/items/${type_id}/${item_id}/`)
  }
  dogmaEffects() {
    return this.publicGet(`dogma/effects/`)
  }
  dogmaEffect(effect_id) {
    return this.publicGet(`dogma/effects/${effect_id}/`)
  }

  // FACTION WARFARE
  fwFactionLeaderboard() {
    return this.publicGet(`fw/leaderboards/`)
  }
  fwCharacterLeaderboard() {
    return this.publicGet(`fw/leaderboards/characters/`)
  }
  fwCorporationLeaderboard() {
    return this.publicGet(`fw/leaderboards/corporations/`)
  }
  fwStats() {
    return this.publicGet(`fw/stats/`)
  }
  fwSystems() {
    return this.publicGet(`fw/systems/`)
  }
  fwWars() {
    return this.publicGet(`fw/wars/`)
  }

  // INCURSIONS
  incursions() {
    return this.publicGet(`incursions/`)
  }

  // INDUSTRY
  industryFacilities() {
    return this.publicGet(`industry/facilities/`)
  }
  industrySystems() {
    return this.publicGet(`industry/systems/`)
  }

  // INSURANCE
  insurance() {
    return this.publicGet(`insurance/prices/`)
  }

  // KILLMAILS
  killmail(killmail_id, killmail_hash) {
    return this.publicGet(`killmails/${killmail_id}/${killmail_hash}/`)
  }

  // LOYALITY
  loyaltyStores(corporation_id) {
    return this.publicGet(`loyalty/stores/${corporation_id}/offers/`)
  }

  // MARKET
  marketHistory(region_id) {
    return this.publicGet(`markets/${region_id}/history/`)
  }
  marketOrders(region_id) {
    return this.publicGet(`markets/${region_id}/orders/`)
  }
  marketTypes(region_id) {
    return this.publicGet(`markets/${region_id}/types/`)
  }
  marketGroups() {
    return this.publicGet(`markets/groups/`)
  }
  marketGroup(market_group_id) {
    return this.publicGet(`markets/groups/${market_group_id}/`)
  }
  marketPrices() {
    return this.publicGet(`markets/prices/`)
  }

  // OPPORTUNITIES
  groups() {
    return this.publicGet(`opportunities/groups/`)
  }
  group(group_id) {
    return this.publicGet(`opportunities/groups/${group_id}/`)
  }
  tasks() {
    return this.publicGet(`opportunities/tasks/`)
  }
  task(task_id) {
    return this.publicGet(`opportunities/tasks/${task_id}/`)
  }

  // PLANETARY INTERACTION
  schematics(schematics_id) {
    return this.publicGet(`universe/schematics/${schematics_id}/`)
  }

  // ROUTES
  route(origin_id, destination_id) {
    return this.publicGet(`route/${origin_id}/${destination_id}/`)
  }

  // SEARCH
  seach() {
    return this.publicGet(`search/`)
  }

  // SOVEREIGNTY
  sovereigntyCampaigns() {
    return this.publicGet(`sovereignty/campaigns/`)
  }
  sovereigntyMap() {
    return this.publicGet(`sovereignty/map/`)
  }
  sovereigntyStructures() {
    return this.publicGet(`sovereignty/structures/`)
  }

  // STATUS
  status() {
    return this.publicGet(`status/`)
  }

  // UNIVERSE
  // TODO flesh out universe data pull
  id2Name(options = {}, payload = []) {
    return this.publicPost(`universe/ids/`, options, JSON.stringify(payload))
  }

  // WARS
  wars() {
    return this.publicGet(`wars/`)
  }
  war(war_id) {
    return this.publicGet(`wars/${war_id}/`)
  }
  warKillmails(war_id) {
    return this.publicGet(`wars/${war_id}/killmails/`)
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

function riteMeow() {
  return Math.round(Date.now() / 1000)
}