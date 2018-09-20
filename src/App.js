import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// react router routes component
import { Routes } from './main/components/Routes';

// main navigation component
import { Navigation } from './modules';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <br />
        <Container>
          <Routes />
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
