import React from 'react';
import GlobalStyle from './styles/global';
import AppContext from './hooks';
// import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <AppContext>
      <SignIn />
    </AppContext>
    <GlobalStyle />
  </>
);

export default App;
