import ITokenResponseBody from "./TokenResponseBody";

export default interface IServiceResponse {
    body: object | string
    headers: object
    statusText: string
    status: number
}