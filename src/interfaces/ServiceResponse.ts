import ITokenResponseBody from "./TokenResponse";

export default interface IServiceResponse {
    // body: ITokenResponseBody | object
    body: ITokenResponseBody | object | string
    headers: object
    statusText: string
    status: number
}