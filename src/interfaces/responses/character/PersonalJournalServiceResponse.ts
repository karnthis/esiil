import IServiceResponse from "../ServiceResponse";
import IWalletJournalEntry from "../corp/WalletJournalEntry";

export default interface IPersonalJournalServiceResponse extends IServiceResponse {
    body: IWalletJournalEntry[]
}