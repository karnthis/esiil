import IServiceResponse from "../ServiceResponse";
import IWalletBalance from "./WalletBalance";

export default interface IWalletBalanceServiceResponse extends IServiceResponse {
    body: IWalletBalance[]
}