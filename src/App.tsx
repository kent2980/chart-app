import React, { useContext, useState } from 'react';
import { StockChartDataContext } from './context/StockChartDataContext';

export const App: React.FC = () => {
  const { setParams, data } = useContext(StockChartDataContext);
  const [inputCode, setInputCode] = useState('');

  const handleSearch = () => {
    if (inputCode) {
      const queryParams: Record<string, any> = {
        code: inputCode,
        select_date: "2023-12-05"
      };
      setParams(queryParams);
    }
  };

  return (
    <div>
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
