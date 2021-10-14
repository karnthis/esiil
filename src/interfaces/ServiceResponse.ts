import ITokenResponseBody from "./TokenResponse";

export default interface IServiceResponse {
    body: ITokenResponseBody | object
    headers: object
    statusText: string
    status: number
}