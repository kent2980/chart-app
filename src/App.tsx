import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import View from './pages/View';

export const App: React.FC = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/view' element={<View/>}></Route>
      </Routes>
    </div>
  );
};
