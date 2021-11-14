import ITokenResponseBody from "./TokenResponse";

export default interface IServiceResponse {
    body: ITokenResponseBody | string
    headers: object
    statusText: string
    status: number
}