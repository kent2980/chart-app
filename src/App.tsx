import React, { useContext, useState } from 'react';
import { StockChartDataContext } from './context/StockChartDataContext';
import { StockChartParams } from './services/FsstockApiServies';
import StockChart from './components/charts/StockChart';

export const App: React.FC = () => {
  const { setParams, data } = useContext(StockChartDataContext);
  const [inputCode, setInputCode] = useState('');

  const handleSearch = () => {
    if (inputCode) {
      const queryParams = new StockChartParams();
      queryParams.code = inputCode
      queryParams.ordering = "date"
      queryParams.date_range_gte = "2023-10-01"
      setParams(queryParams);
    }
  };


  return (
    <div>
      <header>
        <StockChart/>
      </header>
      <input type="text" value={inputCode} onChange={(e) => setInputCode(e.target.value)} />
      <button onClick={handleSearch}>検索</button>
      {data && data.length > 0 && (
        <div>
          {/* Render content based on the existence of 'data' */}
          {/* Add your conditional content here */}
          {data.map((item, index) => (
            <div key={index}>
              {item.date} /
              {item.close}
              {/* Display other properties of 'item' here as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
