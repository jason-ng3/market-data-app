// Type for marketData state fetched from server

export interface MarketDataItem {
  _id: string;
  timestamp: string;
  data: any;
}

export type MarketData = MarketDataItem[];