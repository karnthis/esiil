import ITokenResponseBody from "./TokenResponseBody";

export default interface IServiceResponse {
    body: any
    headers: object
    statusText: string
    status: number
}