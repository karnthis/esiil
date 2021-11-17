import IServiceResponse from "../ServiceResponse";
import IName2IdResponseBody from "./Name2IdResponseBody";

export default interface IName2IdServiceResponse extends IServiceResponse {
    body: IName2IdResponseBody
}