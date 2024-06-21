// backend/src/models/Investment.ts

export interface Investment {
    id: number;
    symbol: string;
    name: string;
    amount: number;
    purchaseDate: Date;
}
