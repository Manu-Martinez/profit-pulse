// src/routes/investmentRoutes.ts

import express from 'express';
import { getDailyData, getWeeklyData, getIntradayData } from '../utils/alphaVantageAPI';

const router = express.Router();

router.get('/daily/:symbol', async (req, res) => {
    const symbol = req.params.symbol;
    try {
        const data = await getDailyData(symbol);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: 'Failed to fetch daily data', error: error.message });
    }
});

router.get('/weekly/:symbol', async (req, res) => {
    const symbol = req.params.symbol;
    try {
        const data = await getWeeklyData(symbol);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: 'Failed to fetch weekly data', error: error.message });
    }
});

router.get('/intraday/:symbol', async (req, res) => {
    const symbol = req.params.symbol;
    try {
        const data = await getIntradayData(symbol);
        res.json(data);
    } catch (error: any) {
        res.status(500).json({ message: 'Failed to fetch intraday data', error: error.message });
    }
});

export default router;
