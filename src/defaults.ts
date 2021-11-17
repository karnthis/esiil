import * as dotenv from 'dotenv'
if (dotenv) dotenv.config()

export default class CoreDefaults {
  static userAgent: string = process.env.UserAgent || 'ESIIL-Default/1.0.x'
  static baseURL: string = 'https://esi.evetech.net/'
  static version: string = 'latest/'
  static source: string = 'tranquility'
  static oauthURL: string = 'https://login.eveonline.com/v2/oauth'
  static clientID: string = process.env.ClientID || ''
  static clientSecret: string = process.env.ClientSecret || ''
  // static tmpKey: string = 'nehPQ7FQ1YK-leKyIg-aACZaT-DbTL5V1XpXghtLX_bEC-fwxhdE_4yQKDF6cA-V4c-5kh8wMZbfYw5xxgM9DynhMkVrmQFyYB3QMZwydr922UWs3kLz-nO6vi0ldCn-ffM9odUPRHv9UbhM5bB4SZtCrpr9hWQgJ3FjzWO2KosGQ8acLxLtDQfU_lq0OGzoj_oWwUKaN_OVfu80zGTH7mxVeGMJqWXABKd52ByvYZn3wL_hG60DfDWGV_xfLlHMt_WoKZmrXT4V3BCBmbitJ6lda3oNdNeHUh486iqaL43bMR2K4TzrspGMRUYXcudUQ9TycBQBrUlT85NRY9TeOw'

  static domainAndVersion(): string {
    return `${this.baseURL}${this.version}`
  }
  static authHeader(): string {
    return Buffer.from(`${this.clientID}:${this.clientSecret}`).toString('base64')
  }
  static queryParamStart(): string {
    return `?datasource=${this.source}`
  }

}
