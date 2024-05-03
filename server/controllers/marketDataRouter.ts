import express from 'express';
const marketDataRouter = express.Router();
import MarketQuoteModel from '../models/MarketDataModel';

marketDataRouter.get('/', async (_req, res) => {
  try {
    const marketData = await MarketQuoteModel.find({});
    res.json(marketData);
  } catch (error) {
    console.error('Error fetching market data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default marketDataRouter;