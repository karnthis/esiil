import IServiceResponse from "../ServiceResponse";
import IPersonalTransaction from "./PersonalTransaction";

export default interface IPersonalTransactionServiceResponse extends IServiceResponse {
    body: IPersonalTransaction[]
}