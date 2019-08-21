export interface IPayment {
    id: number,
    debitAccount: string,
    creditAccount: string,
    currency: string,
    executionDate: string,
    reason: string
}