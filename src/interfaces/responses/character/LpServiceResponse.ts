import IServiceResponse from "../ServiceResponse";
import ILp from "./Lp";

export default interface ILpServiceResponse extends IServiceResponse {
    body: ILp[]
}