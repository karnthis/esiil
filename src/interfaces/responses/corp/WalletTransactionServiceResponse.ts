import IServiceResponse from "../ServiceResponse";
import IWalletTransaction from "./WalletTransaction";

export default interface IWalletTransactionServiceResponse extends IServiceResponse {
    body: IWalletTransaction[]
}