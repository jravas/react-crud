import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// react router routes component
import { Routes } from './main/components/Routes';

// main navigation component
import { Navigation } from './modules';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
