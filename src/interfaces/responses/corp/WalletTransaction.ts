export default interface IWalletTransaction {
    client_id: number
    date: string
    is_buy: boolean
    journal_ref_id: number
    location_id: number
    quantity: number
    transaction_id: number
    type_id: number
    unit_price: number
}