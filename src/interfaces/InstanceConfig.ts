export default interface IInstanceConfig {
    userAgent: string
    scopes: string[]
    state: string
    callbackURL: string
    clientID: string
    clientSecret: string
    requestURL: string
}