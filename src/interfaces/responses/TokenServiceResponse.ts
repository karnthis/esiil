import ITokenResponseBody from "./TokenResponseBody";
import IServiceResponse from "./ServiceResponse";

export default interface ITokenServiceResponse extends IServiceResponse {
    body: ITokenResponseBody
}