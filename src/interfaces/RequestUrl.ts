export default interface IRequestUrl {
    scopes: string[],
    state: string,
    callbackURL: string,
    clientID: string,
}
