import React, { useContext, useState } from 'react';
import { StockChartDataContext } from './context/StockChartDataContext';
import { StockChartParams } from './services/FsstockApiServies';
import Chart from "./components/Chart";
import { EChartOption } from "echarts";

export const App: React.FC = () => {
  const { setParams, data } = useContext(StockChartDataContext);
  const [inputCode, setInputCode] = useState('');

  const handleSearch = () => {
    if (inputCode) {
      const queryParams = new StockChartParams();
      queryParams.code = inputCode
      setParams(queryParams);
    }
  };

  const option:EChartOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  return (
    <div>
      <header>
        <Chart height='200px'option={option}/>
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
