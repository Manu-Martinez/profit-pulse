// src/index.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import investmentRoutes from './routes/investmentRoutes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/investment', investmentRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
