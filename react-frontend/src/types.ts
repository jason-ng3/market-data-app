// Interface for MarketData item
export interface MarketDataItem {
  _id: string;
  timestamp: string;
  data: {
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
  };
  __v: number;
}

// Type for marketData state fetched from server
export type MarketData = MarketDataItem[];