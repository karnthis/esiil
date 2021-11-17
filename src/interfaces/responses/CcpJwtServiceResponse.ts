import IServiceResponse from "./ServiceResponse";
import ICcpJwtResponseBody from "./CcpJwtResponseBody";

export default interface ICcpJwtServiceResponse extends IServiceResponse {
    body: ICcpJwtResponseBody
}