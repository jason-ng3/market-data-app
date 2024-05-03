import express from 'express';
const app = express();
import cors from 'cors';
import marketDataRouter from './controllers/marketDataRouter';
import { unknownEndpoint } from './utils/middleware';

app.use(cors());
app.use('/api/market-data', marketDataRouter);
app.use(unknownEndpoint);

export default app;