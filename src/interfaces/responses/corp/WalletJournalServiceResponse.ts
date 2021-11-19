import IServiceResponse from "../ServiceResponse";
import IWalletJournalEntry from "./WalletJournalEntry";

export default interface IWalletJournalServiceResponse extends IServiceResponse {
    body: IWalletJournalEntry[]
}