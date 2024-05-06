import { useState, useEffect } from 'react';
import axios from 'axios';
import { MarketData, MarketDataItem } from './types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const App = () => {
  const [marketData, setMarketData] = useState<MarketData>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<MarketData>('http://localhost:3001/api/market-data');
        setMarketData(response.data);
      } catch(error) {
        console.error('Error fetching market data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Timestamp</TableCell>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {marketData.map((item: MarketDataItem) => (
            <TableRow key={item._id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}>
              <TableCell>{new Date(item.timestamp).toLocaleString()}</TableCell>
              <TableCell>{JSON.stringify(item.data, null, 2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App
