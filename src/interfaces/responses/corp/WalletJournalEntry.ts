export default interface IWalletJournalEntry {
    amount: number
    balance: number
    context_id: number
    context_id_type: string
    date: string
    description: string
    first_party_id: number
    id: number
    reason: string
    ref_type: string
    second_party_id: number
    tax: number
    tax_receiver_id: number
}