import mongoose, { Model, Schema, Document } from 'mongoose';

const url = process.env.MONGODB_URI;
if (!url) {
  throw new Error('MongoDB URI is not defined');
}
// console.log('connecting to', url)

mongoose.connect(url);

interface MarketQuoteDocument extends Document {
  timestamp: Date;
  data: any;
}

const MarketQuoteSchema = new Schema({
  timestamp: { type: Date, default: null },
  data: Schema.Types.Mixed
});

const MarketQuoteModel: Model<MarketQuoteDocument> = mongoose.model('MarketQuote', MarketQuoteSchema);

export default MarketQuoteModel;