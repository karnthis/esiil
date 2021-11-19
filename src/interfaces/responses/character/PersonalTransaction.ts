import IWalletTransaction from "../corp/WalletTransaction";

export default interface IPersonalTransaction extends IWalletTransaction {
    is_personal: boolean
}