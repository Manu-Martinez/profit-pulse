// src/utils/alphaVantageAPI.ts
import axios from 'axios';

const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

export const getDailyData = async (symbol: string) => {
    try {
        const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching daily data from Alpha Vantage:', error);
        throw error;
    }
};

export const getWeeklyData = async (symbol: string) => {
    try {
        const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weekly data from Alpha Vantage:', error);
        throw error;
    }
};

export const getIntradayData = async (symbol: string) => {
    try {
        const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${ALPHA_VANTAGE_API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching intraday data from Alpha Vantage:', error);
        throw error;
    }
};
