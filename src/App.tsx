import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import AppContext from './hooks';
import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppContext>
      <Routes />
    </AppContext>
    <GlobalStyle />
  </Router>
);

export default App;
