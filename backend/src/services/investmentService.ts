// backend/src/services/investmentService.ts

import { Investment } from '../models/Investment';
import { getDailyData, getWeeklyData, getIntradayData } from '../utils/alphaVantageAPI';

// Function to fetch daily data for an investment
export const getDailyInvestmentData = async (symbol: string): Promise<any> => {
    // Example logic using Alpha Vantage API
    const data = await getDailyData(symbol);
    return data;
};

// Function to fetch weekly data for an investment
export const getWeeklyInvestmentData = async (symbol: string): Promise<any> => {
    // Example logic using Alpha Vantage API
    const data = await getWeeklyData(symbol);
    return data;
};

// Function to fetch intraday data for an investment
export const getIntradayInvestmentData = async (symbol: string): Promise<any> => {
    // Example logic using Alpha Vantage API
    const data = await getIntradayData(symbol);
    return data;
};

// Function to retrieve all investments (mock implementation)
export const getAllInvestments = async (): Promise<Investment[]> => {
    // Example mock data for investments
    const investments: Investment[] = [
        { id: 1, symbol: 'AAPL', name: 'Apple Inc.', amount: 100, purchaseDate: new Date('2023-01-01') },
        { id: 2, symbol: 'MSFT', name: 'Microsoft Corporation', amount: 150, purchaseDate: new Date('2023-02-15') },
        { id: 3, symbol: 'GOOGL', name: 'Alphabet Inc.', amount: 75, purchaseDate: new Date('2023-03-30') }
    ];

    return investments;
};
