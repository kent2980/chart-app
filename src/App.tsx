import React, { useContext, useState } from 'react';
import { DataContext } from './context/ApiDataContext'; // このパスは実際のファイルの場所に合わせて修正してください

export const App: React.FC = () => {
  const { code, setCode, data } = useContext(DataContext);
  const [inputCode, setInputCode] = useState('');

  const handleSearch = () => {
    if (inputCode) {
      const queryParams: string = inputCode;
      setCode(queryParams);
      console.log(code);
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
